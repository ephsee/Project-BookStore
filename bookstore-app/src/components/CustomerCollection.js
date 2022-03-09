import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import BookCard from './BookCard'
import {Grid} from 'semantic-ui-react'

function CustomerCollection({customers, books, orders}) {
    const {id} = useParams()
    const [custColl, setCustColl] = useState([])

    console.log('customer collection', customers[id - 1])
    useEffect( ()=> {
      fetch(`http://localhost:9293/customers/${id}/books`)
        .then(r=>r.json())
        .then(setCustColl)
    }, [])

    console.log(custColl)
    const collection = custColl.map(b => {
      return <BookCard key={b.id} bookitem={b} />
    })
    console.log('collection',collection)

  return (
    <Grid centered className='customerCollection' columns={5}>
      <Grid.Row>
        {collection}
      </Grid.Row>
    </Grid>
    
    // <div>Hello</div>
  )
}

export default CustomerCollection