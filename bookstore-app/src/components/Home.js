import React from 'react'

function Home() {

  function handleClick () {
    fetch('http://localhost:9293/')
      .then(r=>r.json())
      .then(console.log)
  }



  return (
    <button onClick={handleClick}>press me</button>
  )
}

export default Home