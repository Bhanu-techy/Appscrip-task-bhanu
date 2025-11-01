import React from 'react'
import './index.css'

const ProductCard=props =>{
  const {details} = props
  const {image, title} = details
  return (
    <li className='product-card'>
    <img src={image} alt={`Image of ${title}`} className='product-img'/>
    <p>{title}</p>
    </li>
  )
}

export default ProductCard