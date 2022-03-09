import React from 'react'
import {Card, Grid, Button, Image} from 'semantic-ui-react'
import {useHistory} from 'react-router-dom'

function BookCard({bookitem}) {
  const history = useHistory()
  function bookPage(){
    history.push(`/books/${bookitem.id}`)
  }
  return (
    <Grid.Column className='bookCard'>
      <Card className='card'>
        <Image onClick={()=> bookPage()} src = {bookitem.image}/>
        <Card.Content className ='cardContent' onClick={()=>bookPage()}>
          <Card.Header>{bookitem.title}</Card.Header>
          <Card.Meta>
            <span>By: {bookitem.author}</span>
          </Card.Meta>
        </Card.Content>
      </Card>
    </Grid.Column>
  )
}

export default BookCard