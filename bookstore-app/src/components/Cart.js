import React from 'react'

function Cart({cart, customers, setCart}) {

  const custId = customers.map( c => c.id )

  const bookId = Object.values(cart).map( b => b.id )

  const showCart = Object.values(cart).map( o => <li key={o.id}> "{o.title}" by: {o.author}</li>)

  function handleClick(arr) {

    arr.forEach( (e, i) => {
      
      const newOrder = {
        customer_id: custId[1],
        book_id: bookId[i]
      }

      console.log(newOrder)

      fetch('http://localhost:9293/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newOrder),
      })
        .then(r=>r.json())
        .then(data => console.log('posted', data))
    })

    setCart({})

  }


  return (
    <div>Cart

      <ul>

        <div className="about">{showCart}</div>

      </ul>
      <button onClick={()=> handleClick(showCart)}>BUY</button>

    </div>
  )
}

export default Cart