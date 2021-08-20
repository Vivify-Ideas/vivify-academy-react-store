import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SingleProduct from '../components/SingleProduct'
import productService from '../services/ProductService'

function AppProducts() {
  const [search, setSearch] = useState('')
  const [products, setProducts] = useState(productService.getAll())


  const filteredProducts = products.filter(prod => prod.name.toLowerCase().startsWith(search.toLowerCase()))

  const setNewCountForProduct = (id, newCount) => {
    const index = products.findIndex((prod) => prod.id === id);

    setProducts(
      [...products.slice(0, index), {...products[index], count: newCount}, ...products.slice(index + 1)]
    )
  }

  const increment = (id) => {
    const newCount = productService.increment(id);
    setNewCountForProduct(id, newCount)
  }

  const decrement = (id) => {
    const newCount = productService.decrement(id);

    setNewCountForProduct(id, newCount)
  }

  return (
    <div style={{width: '100%', marginLeft: 5}}>
      <h1>Products</h1>
      <input style={{marginBottom: 15}} type="text" value={search} onChange={({target}) => setSearch(target.value)} placeholder="Search product..."/>
      <div style={{
        width: '100%',
        display: 'flex',
      }}>
        {filteredProducts.map((prod) => (
          <SingleProduct
            key={prod.id}
            id={prod.id}
            name={prod.name}
            count={prod.count}
            decrementCallback={decrement}
            incrementCallback={increment}
          />
        ))}
      </div>
    </div>
  )
}

export default AppProducts;