import React from 'react'
import BookCard from"./BookCard"
import {Button, Grid} from 'semantic-ui-react'
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
      <div className='logo'>
        <img src={require ('../assets/CoopAndPeasant.jpg')} alt='Coop and Peasant Logo' />
        <div className='about'>
          ABOUT STUFF
          <p>something and something about the bookstore yadda yadda</p>
        </div>
      </div>
      <Grid centered columns={10}>
        <Grid.Row>
          {displayCards}
        </Grid.Row>
      </Grid>
      
    </>
  )
}

export default Home