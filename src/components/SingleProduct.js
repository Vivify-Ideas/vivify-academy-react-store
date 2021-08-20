import React from 'react'
import { Link } from 'react-router-dom'

function SingleProduct({id, name, count, decrementCallback, incrementCallback}) {
  return (
    <div
      style={{
        border: '1px solid black',
        marginBottom: 10,
        padding: 5,
        width: 200,
        marginLeft: 5
      }}>
       <p>Name: {name}</p>
       <p>At store: {count}</p>
       <button style={{width: 150, marginBottom: 8}} onClick={() => incrementCallback(id)}>+</button>
       <button style={{width: 150}} onClick={() => decrementCallback(id)}>-</button>
       <Link to={`products/${id}`}>Buy</Link>
    </div>
  )
}

export default SingleProduct