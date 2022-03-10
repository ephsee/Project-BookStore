import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

function CustomerOrders({custColl}) {

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
    
    function handleDelete(arr) {

        console.log()

        //   arr.forEach( o => {
    
        //     console.log()
    
        //   })
    
    
                // fetch(`http://localhost:9293/orders/${id}`,
                //     { method: "DELETE" })
                    
                //     .then(console.log)
                    
        }

    return(

        <div>
            {/* <p>Order id: {ord.id}</p>
            <p>Book: {ord.book_id}</p>
            <button onClick={handleDelete}>X</button> */}
        </div>

    )
}

export default CustomerOrders