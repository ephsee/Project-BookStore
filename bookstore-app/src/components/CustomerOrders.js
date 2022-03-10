import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

function CustomerOrders({custColl, ord, handleDelete}) {
    console.log("custColl", custColl)

    const book = custColl.filter( b => {
        if (b.id === ord.book_id) {
            return b
        }
    })

    console.log('book',book)

    return(

        <div>
            <p>Order id: {ord.id}</p>
            <p>Book: {book[0].title}</p>
            <button className="buttons" onClick={() =>handleDelete(book[0],ord)}>X</button>
        </div>

    )
}

export default CustomerOrders