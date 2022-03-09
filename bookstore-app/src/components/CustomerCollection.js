import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

function CustomerCollection({customers}) {
    const {id} = useParams()
    console.log('customer collection', customers)



  return (
    <div>CustomerCollection</div>
  )
}

export default CustomerCollection