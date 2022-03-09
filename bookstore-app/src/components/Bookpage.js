import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Button} from 'semantic-ui-react'

function Bookpage({books, cart, setCart}) {
  const [showBook, setShowBook] = useState({})
  const { id } = useParams()
  const book = (books[id-1])
  useEffect( () => {
    fetch(`http://localhost:9293/books/${id}`).then(r=>r.json()).then(setShowBook)
  }, [])

 

  //Change this for objects
  function handleBuy() {
    setCart({...cart, [book.id]: book })
  }

  
  return(
    <div className = "abook">
      <img src = {showBook.image}></img>
      <p>{showBook.title}</p>
      <p>{showBook.genre}</p>
      <p>{showBook.author}</p>
      <Button.Group>
        <Button onClick={handleBuy} icon='add to cart'/>
      </Button.Group>
    </div>
  )
}

export default Bookpage