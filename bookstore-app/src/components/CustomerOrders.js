import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

function CustomerOrders() {

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
    
    function handleDelete(arr) {

        console.log()

        //   arr.forEach( o => {
    
        //     console.log()
    
        //   })
    
    
                // fetch(`http://localhost:9293/orders/${id}`,
                //     { method: "DELETE" })
                    
                //     .then(console.log)
                    
        }


    const showOrders = custOrders.map( ord => {
        return (
            <div className='about'>
              <h2>ORDERS: </h2>
              <p>Order id: {ord.id}</p>
              <p>Book id: {ord.book_id}</p><p>Customer id: {ord.customer_id}</p>
              <button onClick={handleDelete}>X</button>
            </div>
          )
      })


    return(

        <div>
                 {showOrders}
        </div>

    )
}

export default CustomerOrders