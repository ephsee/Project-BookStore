import React, {useEffect, useState} from 'react'
import BookCard from"./BookCard"

function Home() {
  const [books, setBooks] = useState([])

  useEffect( () => {
    fetch('http://localhost:9293/books')
      .then(r=>r.json())
      .then(setBooks)
  }, [])
  console.log(books)
  let quantSortedBooks = books.sort((a,b) => {
    if (a.quantity < b.quantity){
      return -1
    }
    else if (a.quantity > b.quantity) {
      return 1
    }
    else{
      return 0
    }
  })

  
  console.log(quantSortedBooks)


  return (
    <>
    <button onClick={console.log('hi')}>press me</button>
    {books.map((bookitem, index) => {
       if (index < 6){
        return <BookCard bookitem = {bookitem}/>
       }
      }
    )}
    </>
  )
}

export default Home