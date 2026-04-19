import React from 'react'
import sale from '../images/sale.png'
import service from '../images/service.png'
import management from '../images/management.png'

const ProductCard = ({title}) => {
  return (
    <div className='productCard'>
        <p className='productTitle'>{title}</p>
        <img className='item' alt='sale' src={title === "Point of sale" ? sale : title === "Self-service" ? service : management}/>
    </div>
  )
}

export default ProductCard