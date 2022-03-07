import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Cart from './Cart'
import Navbar from './Navbar'

function App() {

    return (
      <>
        <Navbar />
  
        <Switch>
          
          <Route exact path="/">
            <Home />
          </Route>
  
          <Route path="/cart">
            <Cart/>
          </Route>
  
        </Switch>
        
      </>
    );
  }
  
  export default App;