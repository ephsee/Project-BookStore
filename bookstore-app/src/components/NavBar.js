import React from 'react'
import { NavLink } from "react-router-dom"
import {Menu} from 'semantic-ui-react'

function NavBar() {

  return (    
    // <div className='topnav container-fluid'>
    //   <div  className='col ms-5'>
    //     <NavLink exact to='/'><Button icon='home'/></NavLink>
    //   </div>
    //   <div className='col'>
    //     <NavLink to='/books'><Button icon='book' /></NavLink>
    //   </div>
    //   <div className='col'>
    //     <NavLink to='/cart'><Button floated='right' icon='shopping cart'/></NavLink>
    //   </div>
    // </div>
    <Menu size='large'>
      <NavLink exact to = '/'>
         <Menu.Item name='Home' icon='home' />
      </NavLink>
      <NavLink to ='/books'>
         <Menu.Item name='Books' icon='book' />
      </NavLink>
      <Menu.Menu position ='right'>
        <NavLink to = '/cart'>
         <Menu.Item  name='Cart' icon='shopping cart' />
        </NavLink>
      </Menu.Menu>
    </Menu>
  )
}

export default NavBar