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