import React from 'react'
import {Card} from 'semantic-ui-react'

function BookCard({bookitem}) {
  return (
    <div className="card">
        <p>{bookitem.title}</p>
        <p>{bookitem.author}</p>
        <p>{bookitem.genre}</p>
        <p>{bookitem.publisher}</p>
        <p>In Stock: {bookitem.quantity}</p>
        
    </div>
  )
}

export default BookCard