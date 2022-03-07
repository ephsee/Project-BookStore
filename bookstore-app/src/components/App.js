import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Cart from './Cart'
import NavBar from './NavBar'
import '../index.css';

function App() {

    return (
      <div className="App App-header">
        <NavBar />
  
        <Switch>
          
          <Route exact path="/">
            <Home />
          </Route>
  
          <Route path="/cart">
            <Cart/>
          </Route>
  
        </Switch>
        
      </div>
    );
  }
  
  export default App;