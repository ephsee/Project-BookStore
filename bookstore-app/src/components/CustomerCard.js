import React from 'react'
import {useHistory} from 'react-router-dom'
import {Card, Icon} from 'semantic-ui-react'

function CustomerCard({c}) {
    const history = useHistory()
    function customerPage(){
        history.push(`/customers/${c.id}`)
        console.log(c)
    }

    


  return (
        // <div className='about' onClick = {() => customerPage()}>
        //     <h1>Name: {c.name}</h1>
        //     <h3>Email: {c.email}</h3>
        //     <h3>Mailing Address: {c.address}</h3>
        // </div>

        <Card className='about' onClick = {() => customerPage()}>
            <Card.Content header={c.name}/>
            <Card.Content description={c.address} />
            <Card.Content extra>
                <Icon name='mail'/>{c.email}    
            </Card.Content>
        </Card>
  )
}

export default CustomerCard