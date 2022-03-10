import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import BookCard from './BookCard'
import {Grid} from 'semantic-ui-react'

function CustomerCollection({customers, books, orders}) {
    const {id} = useParams()
    const [custColl, setCustColl] = useState([])
    const [custOrders, setCustOrders] = useState([])

    useEffect( ()=> {
      fetch(`http://localhost:9293/customers/${id}/books`)
        .then(r=>r.json())
        .then(setCustColl)
    }, [])

    useEffect(()=>{
      fetch(`http://localhost:9293/customers/${id}/orders`)
        .then(r=>r.json())
        .then(setCustOrders)
    }, [])

    console.log(custColl)
    const collection = custColl.map(b => {
      return <BookCard key={b.id} bookitem={b} />
    })
    console.log('collection',collection)

    const showOrders = custOrders.map( ord => <div className='about' ><h1>ORDERS: </h1><p>Order id: {ord.id}</p><p>Book id: {ord.book_id}</p><p>Customer id: {ord.customer_id}</p></div>)

  return (
    <div>
    <Grid centered className='customerCollection' columns={5}>
      <Grid.Row>
        {collection}
      </Grid.Row>
    </Grid>
      {showOrders}
    </div>
    // <div>Hello</div>
  )
}

export default CustomerCollection