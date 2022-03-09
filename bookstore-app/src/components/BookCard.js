import React from 'react'
import {Card, Grid, Button, Image} from 'semantic-ui-react'
import {useHistory} from 'react-router-dom'

function BookCard({bookitem}) {
  const history = useHistory()
  function check(){
    history.push(`/books/${bookitem.id}`)
  }
  
  const button = (
    <>
      <Button.Group floated='right'>
        <Button onClick={() => console.log('hi')} icon = 'heart outline'/>
      </Button.Group>
      <Button.Group>
        <Button onClick={()=>console.log(bookitem.title)} icon='add to cart'/>
      </Button.Group>
    </>
  )
  
  const likeButton = () => {
    
  }


  return (
    <Grid.Column className='bookCard'>
      <Card className='card'>
        <Image onClick={()=> check()} src = {bookitem.image}/>
        <Card.Content onClick={()=>check()}>
          <Card.Header>{bookitem.title}</Card.Header>
          <Card.Meta>
            <span>{bookitem.author}</span>
          </Card.Meta>
          <Card.Description>
            {bookitem.description}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
          {button}
          {likeButton}
          </a>
        </Card.Content>
      </Card>
    </Grid.Column>
  )
}

export default BookCard