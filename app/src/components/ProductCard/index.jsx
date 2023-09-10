import React from 'react'
import s from './index.module.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addToCartAction } from '../../store/reducer/cartReducer';

export default function ProductCard({ id, title, image, price }) {
	const dispatch = useDispatch();
  return (
    
	  <div className={s.product_card}>
		  <Link to={`/products/${id}`}>
       <img src={`http://localhost:3333${image}`} alt={title} />
        <p>{ title }</p>
        <p>{ price }$</p>
      </Link>
       <span onClick={()=>dispatch(addToCartAction({id,title,image,price}))}>  cart<i class="fa-solid fa-cart-plus"></i></span>
    </div>
    
  )
}


