
import React from 'react'
import { Link } from 'react-router-dom'
function GoBackBtn() {
  return (
    <Link to='/' className='back-btn'>
      <p className='boton-texto'>Inicio</p>
    </Link>
  )
}

export default GoBackBtn