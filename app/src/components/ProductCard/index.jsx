import React from 'react'

export default function ProductCard({ image, title,  }) {
  return (
    <div>
      <img src={image} alt={title} />
      <p>{ title }</p>
      
    </div>
  )
}