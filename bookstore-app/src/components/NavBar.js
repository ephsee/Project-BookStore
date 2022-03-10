import React from 'react'
import { NavLink } from "react-router-dom"
import {Menu} from 'semantic-ui-react'

function NavBar() {

  return (
    <Menu inverted size='large'>
      <NavLink exact to = '/'>
         <Menu.Item name='Home' icon='home' />
      </NavLink>
      <NavLink to ='/books'>
         <Menu.Item name='Books' icon='book' />
      </NavLink>
      <NavLink to = '/customers'>
          <Menu.Item  name='Customers' icon='users'/>
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