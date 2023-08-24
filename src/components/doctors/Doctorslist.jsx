import React from 'react'
import './doctors.css'
import Navbar from '../Navbar'
import Doctorscard from './Doctorscard'

const Doctorslist = ({doctors}) => {
  return (
    <div className='list'>
      <Navbar/>
      {doctors.map(el=><Doctorscard el={el}/>)}
    </div>
  )
}

export default Doctorslist
