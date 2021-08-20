import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import customerService from '../services/CustomerService'

function AppCustomers() {
  const [newCustomer, setNewCustomer] = useState({
    name: '',
    surname: ''
  })

  const [customers, setCustomers] = useState(customerService.getAll())

  const deleteCustomer =(id) => {
    const isDeleted = customerService.delete(id)

    if (isDeleted) {
      const index = customers.findIndex(cus => cus.id === id)
      setCustomers([...customers.slice(0, index), ...customers.slice(index + 1)]);
    }
  }

  const addNewCustomer = (e) => {
    e.preventDefault();

    const newCus = customerService.create(newCustomer);

    setCustomers([...customers, newCus])
    setNewCustomer({
      name: '',
      surname: ''
    })
  }

  return (
    <div>
      <ul>
        {customers.map((customer) =>
        <li style={{ border: '1px solid black', marginBottom: '5px', padding: 5, display: 'flex', flexDirection: 'column'}} key={customer.id}>
          <span>Name: {customer.name}</span>
          <span>Surname: {customer.surname}</span>
          <Link to={`/customers/${customer.id}`}>Latest Purchase</Link>
          <button onClick={() => deleteCustomer(customer.id)}>Delete</button>
        </li>)}
      </ul>

      <form onSubmit={addNewCustomer} style={{display: 'flex', flexDirection: 'column', width: 200, marginLeft: 15}}>
        <input type="text" value={newCustomer.name} placeholder="Name" onChange={({target}) => setNewCustomer({...newCustomer, name: target.value})}/>
        <input type="text" value={newCustomer.surname} placeholder="Surname" onChange={({target}) => setNewCustomer({...newCustomer, surname: target.value})}/>
        <button>Add new</button>
      </form>
    </div>
  )
}

export default AppCustomers;