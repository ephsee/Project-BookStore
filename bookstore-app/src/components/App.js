import React,  {useState, useEffect} from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Cart from './Cart'
import NavBar from './NavBar'
import '../index.css';
import BooksCollection from './BooksCollection'
import Bookpage from './Bookpage'
import CustomerContainer from './CustomerContainer'
import CustomerCollection from './CustomerCollection'

function App() {
  const [books, setBooks] = useState([])
  useEffect( () => {
    fetch('http://localhost:9293/books')
      .then(r=>r.json())
      .then(setBooks)
  }, [])

  const [customers, setCustomers] = useState([])
  useEffect( () => {
    fetch('http://localhost:9293/customers')
      .then(r=>r.json())
      .then(setCustomers)
  }, [])

  const [orders, setOrders] = useState([])
  useEffect( () => {
    fetch('http://localhost:9293/orders')
      .then(r=>r.json())
      .then(setOrders)
  }, [])

  const [cart, setCart] = useState({})

    return (
      <div className="App App-header">
        <NavBar />
        <Switch>
          <Route exact path="/books/:id">
            <Bookpage books={books} cart={cart} setCart={setCart}/>
          </Route>
          <Route exact path ='/customers/:id'>
            <CustomerCollection customers={customers} orders={orders} books={books}/>  
          </Route>
          <Route path='/customers'>
            <CustomerContainer customers={customers} />
          </Route>
          <Route path="/cart">
            <Cart setCart={setCart} cart={cart} customers={customers}/>
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