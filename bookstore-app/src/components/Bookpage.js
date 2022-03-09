import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'

function Bookpage({books}) {
    const { id } = useParams()
    
    const book = (books[id-1])
    return(
        <div className = "ui card">
        <img src = {book.image}></img>
        <p>{book.title}</p>
        <p>{book.genre}</p>
        <p>{book.author}</p>
        
        
        </div>
    
  )
}

export default Bookpage