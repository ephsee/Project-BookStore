import React from 'react'
import BookCard from"./BookCard"
import {Button, Grid, Image, Segment} from 'semantic-ui-react'
import BooksCollection from './BooksCollection'
import '../assets/CoopAndPeasant.jpg'

function Home({books}) {

  const displayCards = books.map((bookitem, i) => {
    if (i < 5){
     return <BookCard key = {bookitem.id} bookitem = {bookitem}/>
    }
   }
 )

  return (
    <>
      <Segment>
        <Image src={require ('../assets/CoopAndPeasant.jpg')} size='huge' centered/>
        <p>


        </p>
      </Segment>      
      <Button className="ui button" onClick={() => console.log('hi')}>press me</Button>
      <Grid centered columns={10}>
        <Grid.Row>
          {displayCards}
        </Grid.Row>
      </Grid>
      
    </>
  )
}

export default Home