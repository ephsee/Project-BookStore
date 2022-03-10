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


    const orders = Object.values(custOrders).map( o => o.id )

    console.log(orders)

    console.log("custColl", custColl)

    const book = custColl.filter( b => {
        if (b.id === ord.book_id) {
            return b
        }
    })
    
    function handleDelete(arr) {

        console.log()

        //   arr.forEach( o => {
    
        //     console.log()
    
        //   })
    
    
                // fetch(`http://localhost:9293/orders/${id}`,
                //     { method: "DELETE" })
                    
                //     .then(console.log)
                    
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