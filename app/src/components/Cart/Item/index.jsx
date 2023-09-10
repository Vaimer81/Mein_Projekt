import React from 'react'

export default function Item({ id, title, price, count }) {
  return (
    <div>
      <p>{ title }</p>
      <p>{ price * count }$</p>
      <p>{ count }</p>

      <div>
        <button>-</button>
        <button>+</button>
      </div>

      <span>X</span>
    </div>
  )
}

