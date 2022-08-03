import React from 'react'

function Verse({verse}) {
  return (
    <div>
        <h1>{verse.name}</h1>
        <p>{verse.message}</p>
        <small>{verse.likes} likes</small>
    </div>
  )
}

export default Verse