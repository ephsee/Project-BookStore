import React from 'react'

function Cart({cart}) {

  console.log("from CART", cart)

  console.log(Object.values(cart))

  const showCart = Object.values(cart).map( o => <div><ul><li key={o.id}> "{o.title}" by: {o.author}</li></ul></div>)

  return (
    <div>Cart

        <div className="about">{showCart}</div>

    </div>
  )
}

export default Cart