import React, { useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom';
import customerService from '../services/CustomerService';
import productService from '../services/ProductService';

function BuyProduct() {
  const {id} = useParams();
  const history = useHistory();
  const customers = customerService.getAll();
  const [product, setProduct] = useState(productService.get(id));
  const [selectedCustomer, setSelectedCustomer] = useState(customers[0].id);


  const handleChangeCustomer = (e) => {
    setSelectedCustomer(e.target.value);
  }

  const handleConfirm = () => {
    customerService.addProduct(selectedCustomer, product.name);

    const newCount = productService.decrement(id);

    setProduct({...product, count: newCount})
  }

  const handleCancel = () => {
    history.push('/products');
  }

  if (!product.count) {
    return <Link to="/products">Go back to Products</Link>
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column', marginLeft: 10}}>
      <h1>Buy product</h1>
      <p><strong>Name:</strong> {product.name}</p>
      <p><strong>At store:</strong> {product.count}</p>
      <select style={{width: 200}} onChange={handleChangeCustomer} value={selectedCustomer}>
        {customers.map((cus) => (<option key={cus.id} value={cus.id}>{`${cus.name} ${cus.surname}`}</option>))}
      </select>
    <div style={{marginTop: 15}}>
      <button type="button" onClick={handleConfirm}>Confirm</button>
      <button type="button" onClick={handleCancel}style={{marginLeft: 5}}>Cancel</button>
    </div>
    </div>
  )
}

export default BuyProduct;