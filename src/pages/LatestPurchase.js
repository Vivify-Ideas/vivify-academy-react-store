import React from 'react'
import {Redirect, useParams} from 'react-router-dom'
import customerService from '../services/CustomerService';

function LatestPurchase() {
  const {id} = useParams();

  const customer = customerService.get(id);

  if (!customer) {
    return <Redirect to="/customers"/>
  }
  return (
    <div>
      <h1>Latest Purchases</h1>
      <p>Name: {customer.name}</p>
      <p>Surname: {customer.surname}</p>

      <h3>List of products:</h3>
      <ul>
        {customer.products.map((prod) => (
          <li key={prod.id}>{prod.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default LatestPurchase;