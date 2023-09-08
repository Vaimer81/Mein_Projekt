import React from 'react'
import s from './index.module.css'
import { Link } from 'react-router-dom'

export default function ProductCard({ id, title, image, price }) {
  return (
    <Link to={`/products/${id}`}>
    <div className={s.product_card}>
       <img src={`http://localhost:3333${image}`} alt={title} />
        <p>{ title }</p>
        <p>{ price }$</p>
      
        
    </div>
    </Link>
  )
}


