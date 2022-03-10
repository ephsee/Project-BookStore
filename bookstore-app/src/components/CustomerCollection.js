import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import BookCard from './BookCard'
import CustomerOrders from './CustomerOrders'
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

    const collection = custColl.map(b => {
      return <BookCard key={b.id} bookitem={b} />
    })

    console.log('collection',collection)
    console.log('custOrders', custOrders)

    const showOrders = custOrders.map( ord => <CustomerOrders key={ord.id} ord = {ord} custColl={custColl}/>)

  return (
    <div>
    <Grid centered className='customerCollection' columns={5}>
      <Grid.Row>
        {collection}
      </Grid.Row>
    </Grid>

        <div className='about'>
            <h2>ORDERS: </h2>
                 {showOrders}
        </div>
    </div>
  )
}

export default CustomerCollection