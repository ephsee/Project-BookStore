import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

function CustomerOrders({custColl, ord}) {

    const [custOrders, setCustOrders] = useState([])
    const {id} = useParams()

    useEffect(()=>{
        fetch(`http://localhost:9293/customers/${id}/orders`)
          .then(r=>r.json())
          .then(setCustOrders)
      }, [])


    console.log(custOrders)

    console.log("custColl", custColl)

    const book = custColl.filter( b => {
        if (b.id === ord.book_id) {
            return b
        }
    })
    
    function handleDelete() {

        console.log('book title', book[0].title)
        console.log('order id', ord.id)

        // fetch(`http://localhost:9293/orders/${ord.id}`,
        //     { method: "DELETE" })
        //     .then(r=>r.json())
        //     .then(console.log)

        fetch(`http://localhost:9293/orders/${ord.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(ord),
            })
            .then(r=>r.json())
            .then(data => console.log('deleted', data))
                    
    }
    console.log('book',book)

    return(

        <div>
            <p>Order id: {ord.id}</p>
            <p>Book: {book[0].title}</p>
            <button onClick={handleDelete}>X</button>
        </div>

    )
}

export default CustomerOrders