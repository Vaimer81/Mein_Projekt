import React from 'react'
import { useSelector } from 'react-redux'
import Item from '../Item';


export default function Contener() {
 const cart_state = useSelector(state => state.cart);

  return (
    <div>
      <p>Cart:</p>
      <div>
        {
          cart_state.map(el => <Item key={el.id} {...el} />)
        }
      </div>
    </div>
  )
}
