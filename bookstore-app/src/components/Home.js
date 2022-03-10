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
          <h2>Welcome to the Coop and Peasant...<br></br>Stay a while and Listen.</h2>
          
          <hr></hr>

          <h1>Some of our Favorites</h1>
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