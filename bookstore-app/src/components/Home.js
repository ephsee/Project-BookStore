import React from 'react'
import BookCard from"./BookCard"
import {Button} from 'semantic-ui-react'
import BooksCollection from './BooksCollection'

function Home({books}) {


  return (
    <>
    <Button className="ui button" onClick={() => console.log('hi')}>press me</Button>
    {books.map((bookitem, index) => {
       if (index < 5){
        return <BookCard key = {bookitem.id} bookitem = {bookitem}/>
       }
      }
    )}
    </>
  )
}

export default Home