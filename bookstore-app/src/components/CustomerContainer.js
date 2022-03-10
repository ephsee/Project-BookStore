import React from 'react'
import CustomerCard from './CustomerCard'

function CustomerContainer({customers}) {
    const customer_cards = customers.map( c => {return <CustomerCard key = {c.id} c = {c} /> })

    return (
        <div className='customerContainer'>
            {customer_cards}
        </div>
    )
}

export default CustomerContainer