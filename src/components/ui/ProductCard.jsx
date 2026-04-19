import React from 'react'
import sale from '../../../data/images/sale.png'
import service from '../../../data/images/service.png'
import management from '../../../data/images/management.png'

const ProductCard = ({title}) => {
  return (
    <div className='productCard'>
        <p className='productTitle'>{title}</p>
        <img className='item' alt='sale' src={title === "Point of sale" ? sale : title === "Self-service" ? service: management}/>
    </div>
  )
}

export default ProductCard