import React from 'react'
import {Card, Grid} from 'semantic-ui-react'

function BookCard({bookitem}) {
  


  return (
    <Grid.Column>
        {/* <p>{bookitem.title}</p>
        <p>{bookitem.author}</p>
        <p>{bookitem.genre}</p>
        <p>{bookitem.publisher}</p>
        <p>In Stock: {bookitem.quantity}</p> */}
        <Card centered
          image={bookitem.image}
          header={bookitem.title}
          meta={bookitem.author}
          description={bookitem.description}
          // extra={`Published by: ${bookitem.publisher}`}
          />
    </Grid.Column>
  )
}

export default BookCard