import BookCard from "./BookCard"
import {Grid, Form, Button} from 'semantic-ui-react'
import {useEffect, useState} from 'react'

function BooksCollection({books, setBooks}) {

  const [findBook, setFindBook] = useState("")

  useEffect(()=>{
    fetch('http://localhost:9293/books')
      .then(r=>r.json())
      .then(setBooks)
  },[])


  function searchBooks(e) {
    setFindBook(e.target.value)
  }

  console.log('books', books)


  const inStock = books.filter(book => {
    if (book.quantity > 0) {
      return book
    }
  })

  const searchResult = books.filter((book) => {
    if (book.quantity > 0){
      return (
        book.title.toLowerCase().includes(findBook.toLowerCase()) || book.author.toLowerCase().includes(findBook.toLowerCase())
      )
    }
  })


  const foundBooks = searchResult.map( b => <BookCard key={b.id} bookitem={b} /> )

    const sortBy = (arr, key) => {
        arr.sort((a,b) => {
          if (key !== 'quantity'){
            if (a[key].toLowerCase() < b[key].toLowerCase()) return -1
            else if (a[key].toLowerCase() > b[key].toLowerCase()) return 1
            else if (a[key].toLowerCase() === b[key].toLowerCase()) return 0
          }
          else{
            if (a[key] < b[key])return -1
            else if (a[key] > b[key]) return 1
            else if (a[key] === b[key]) return 0
          }
        })
    }
      const sortAlphaBooks = [...books]
      sortBy(sortAlphaBooks, 'title')
      
      const sortGenreBooks = [...books]
      sortBy(sortGenreBooks, 'genre')
      
      const sortAuthorBooks = [...books]
      sortBy(sortAuthorBooks, 'author')
    
      const sortQuantBooks = [...books]
      sortBy(sortQuantBooks, 'quantity')
    
      const sortPubBooks = [...books]
      sortBy(sortPubBooks, 'publisher')

    //make book card collection
    // const collection = inStock.map(b => {
    //     return <BookCard key={b.id} bookitem={b}/>
    // })


    return(

        <div>
            <div className='searchbar'>
            <Form >
              <Form.Field>
                <label></label>
                <input className="formtext" onChange={searchBooks} placeholder="SEARCH"/>
              </Form.Field>
            </Form>
            </div>
            <div className="bookContainer">
              <Grid centered columns = {6}>
                <Grid.Row>
                    {foundBooks}
                </Grid.Row>
              </Grid>
            </div>
        </div>
        
    )

}

export default BooksCollection