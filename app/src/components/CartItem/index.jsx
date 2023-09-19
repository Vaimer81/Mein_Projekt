import React from 'react'
import s from './index.module.css'
import { useDispatch } from 'react-redux'
import { decrementCountAction, deleteFromCartAction, incrementCountAction } from '../../store/reducer/cartReducer';


export default function CartItem({ id, title, price, count, image, discont_price }) {
	const dispatch = useDispatch();
  
	return (
	  <div className={s.card}>
		<img src={`http://localhost:3333${image}`} alt={title} />
		<p>{title}</p>
  
		<p>Price: {price * count}$</p>
		
		{discont_price && discont_price > 0 && (
		  <p>Discount: {discont_price * count}$</p>
		)}
  
		<p>{count}</p>
  
		<div>
		  <button onClick={() => dispatch(decrementCountAction(id))}>-</button>
		  <button onClick={() => dispatch(incrementCountAction(id))}>+</button>
		</div>
  
		<span onClick={() => dispatch(deleteFromCartAction(id))}>X</span>
	  </div>
	);
  }
  