import React, {useEffect, useState} from 'react'
import BookCard from"./BookCard"
import {Button} from 'semantic-ui-react'

function Home() {
  const [books, setBooks] = useState([])

  useEffect( () => {
    fetch('http://localhost:9293/books')
      .then(r=>r.json())
      .then(setBooks)
  }, [])

  const sortBy = (arr, key) => {
    arr.sort((a,b) => {
      if (a[key].toLowerCase() < b[key].toLowerCase()){
        return -1
      }
      else if (a[key].toLowerCase() > b[key].toLowerCase()) {
        return 1
      }
      else if (a[key].toLowerCase() === b[key].toLowerCase()) {
        return 0
      }
    })
  }
  let sortAlphaBooks = [...books]
  sortBy(sortAlphaBooks, 'title')
  console.log(sortAlphaBooks, 'sorted titles')
  let sortGenreBooks = [...books]
  sortBy(sortGenreBooks, 'genre')
  console.log(sortGenreBooks , 'genre')
  const sortAuthorBooks = [...books]
  sortBy(sortAuthorBooks, 'author')
  console.log(sortAuthorBooks, 'author')


  return (
    <>
    <Button className="ui button" onClick={() => console.log('hi')}>press me</Button>
    <Button circular icon='home' />
    {books.map((bookitem, index) => {
       if (index < 6){
        return <BookCard key = {bookitem.id} bookitem = {bookitem}/>
       }
      }
    )}
    </>
  )
}

export default Home