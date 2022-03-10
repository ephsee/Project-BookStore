import React, {useState} from 'react'
import {Dropdown, Button} from 'semantic-ui-react'

function Cart({cart, customers, setCart}) {
  const [userID, setUserID] = useState(1)
  const bookId = Object.values(cart).map( b => b.id )
  const showCart = Object.values(cart).map( o => <li key={o.id}> "{o.title}" by: {o.author}</li>)

  const users = customers.map( o => {
    return {
      key: o.id,
      text: o.name,
      value: o.id
    }
  })

  const userOptions = customers.map( o => {
    return <option key={o.id} value = {o.id}>{o.name}</option>
  })

  const handleChange = (e) => {
    setUserID(e.target.value)
  }

  function handleClick(arr) {
      arr.forEach( (e, i) => {
      const newOrder = {
        customer_id: userID,
        book_id: bookId[i]
      }
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
      <select onChange = { (e) => handleChange(e)}>
        {userOptions}
      </select>
      <button onClick={() => handleClick(showCart)}>Checkout</button>
    </div>
  )
}

export default Cart