import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Button} from 'semantic-ui-react'

function Bookpage({books, cart, setCart}) {
  const [showBook, setShowBook] = useState({})
  const { id } = useParams()

  useEffect( () => {
    fetch(`http://localhost:9293/books/${id}`).then(r=>r.json()).then(setShowBook)
  }, [])

  const book = (books[id-1])

  function handleBuy() {
    setCart([book, ...cart])
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