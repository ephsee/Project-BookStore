import React from 'react'
import {useHistory} from 'react-router-dom'

function CustomerCard({c}) {
    const history = useHistory()
    function customerPage(){
        history.push(`/customers/${c.id}`)
        console.log(c)
    }

  return (
        <div className='about' onClick = {() => customerPage()}>
            <h1>Name: {c.name}</h1>
            <h3>Email: {c.email}</h3>
            <h3>Mailing Address: {c.address}</h3>
        </div>
  )
}

export default CustomerCard