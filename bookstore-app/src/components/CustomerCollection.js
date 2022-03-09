import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

function CustomerCollection() {
    const params = useParams()

    useEffect( () => {
        fetch(`http:localhost:9293/customers/${params}`).then(r=>r.json()).then(console.log)
    }, [])



  return (
    <div>CustomerCollection</div>
  )
}

export default CustomerCollection