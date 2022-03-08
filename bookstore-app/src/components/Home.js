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
    // if (typeof(arr[0][key]) != 'number' ) {
    // if (key === 'quantity')
    //   arr.sort((a,b) => {
    //     if (a[key] < b[key]){
    //       return -1
    //     }
    //     else if (a[key] > b[key]) {
    //       return 1
    //     }
    //     else if (a[key] === b[key]) {
    //       return 0
    //     }
    //   })

    arr.sort((a,b) => {
      if (key != 'quantity'){
        if (a[key].toLowerCase() < b[key].toLowerCase()){
          return -1
        }
        else if (a[key].toLowerCase() > b[key].toLowerCase()) {
          return 1
        }
        else if (a[key].toLowerCase() === b[key].toLowerCase()) {
          return 0
        }
      }
      else{
        if (a[key] < b[key]){
          return -1
        }
        else if (a[key] > b[key]) {
          return 1
        }
        else if (a[key] === b[key]) {
          return 0
        }
      }
    })
    // }
    // else{
    //   arr.sort((a,b) => {
    //     if (a[key] < b[key]){
    //       return -1
    //     }
    //     else if (a[key] > b[key]) {
    //       return 1
    //     }
    //     else if (a[key] === b[key]) {
    //       return 0
    //     }
      // })
    // }
  }
  const sortAlphaBooks = [...books]
  sortBy(sortAlphaBooks, 'title')
  console.log(sortAlphaBooks, 'sorted titles')
  
  const sortGenreBooks = [...books]
  sortBy(sortGenreBooks, 'genre')
  console.log(sortGenreBooks , 'genre')
  
  const sortAuthorBooks = [...books]
  sortBy(sortAuthorBooks, 'author')
  console.log(sortAuthorBooks, 'author')

  const sortQuantBooks = [...books]
  sortBy(sortQuantBooks, 'quantity')
  console.log(sortQuantBooks, 'quantity')

  const sortPubBooks = [...books]
  sortBy(sortPubBooks, 'publisher')
  console.log(sortPubBooks, 'publisher')

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