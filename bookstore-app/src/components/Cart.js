import React from 'react'

function Cart({cart}) {

  console.log("from CART", cart)

  const showCart = cart.map( item => <div><ul><li key={item.id}> "{item.title}" by: {item.author} </li></ul></div>)

  return (
    <div>Cart

        <div className="about">{showCart}</div>

    </div>
  )
}

export default Cart