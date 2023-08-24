import React from 'react'


const Doctorscard = ({el}) => {
  return (
    <div className='card'>
      <h1>{el.name}</h1>
      <h2>{el.specialty}</h2>
      <h3>{el.state}</h3>
      <img src={el.image}/>
    </div>
  )
}

export default Doctorscard
