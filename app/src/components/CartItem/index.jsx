import React from 'react'
import s from './index.module.css'
import { useDispatch } from 'react-redux'
import { decrementCountAction, deleteFromCartAction, incrementCountAction } from '../../store/reducer/cartReducer';


export default function CartItem({ id, title, price, count }) {

  const dispatch = useDispatch();

  return (
    <div className={s.card}>
      <p>{ title }</p>
      <p>{ price * count }$</p>
      <p>{ count }</p>

      <div>
        <button onClick={()=> dispatch(decrementCountAction(id))}>-</button>
        <button onClick={() => dispatch(incrementCountAction(id))}>+</button>
      </div>

      <span onClick={() => dispatch(deleteFromCartAction(id))}>X</span>
    </div>
  )
}