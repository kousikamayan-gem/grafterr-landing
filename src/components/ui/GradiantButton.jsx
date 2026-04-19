import React from 'react'
import '../styles/global.css';

const GradiantButton = ({label}) => {
  return (
    <button className='cta'>
        {label}
    </button>
  )
}

export default GradiantButton