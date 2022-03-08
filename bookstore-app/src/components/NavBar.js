import React from 'react'
import { NavLink } from "react-router-dom"
import {Button} from 'semantic-ui-react'

function NavBar() {
  return (
    
    <div className='topnav container-fluid'>
      <div  className='col ms-5'>
        <NavLink exact to='/'><Button circular icon='home'/></NavLink>
      </div>
      <div className='col'>
        <NavLink to='/cart'><Button icon='shopping cart'/></NavLink>
      </div>
      <div className='col'>
        <NavLink to='/books'><Button circular icon='book' /></NavLink>
      </div>
    </div>
  )
}

export default NavBar