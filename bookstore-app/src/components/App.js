import React,  {useState, useEffect} from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Cart from './Cart'
import NavBar from './NavBar'
import '../index.css';
import BooksCollection from './BooksCollection'
import Bookpage from './Bookpage'

function App() {
  const [books, setBooks] = useState([])

  useEffect( () => {
    fetch('http://localhost:9293/books')
      .then(r=>r.json())
      .then(setBooks)
  }, [])

  console.log(books)

    return (
      <div className="App App-header">
        <NavBar />
        <Switch>

          <Route exact path="/books/:id">
            <Bookpage books={books}/>
          </Route>

          <Route path="/cart">
            <Cart/>
          </Route>

          <Route path="/books">
            <BooksCollection books={books} setBooks={setBooks}/>
          </Route>

          <Route exact path="/">
            <Home books = {books}/>
          </Route>

        </Switch>
        
      </div>
    );
  }
  
  export default App;