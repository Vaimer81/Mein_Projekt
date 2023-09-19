import React from 'react'
import s from './index.module.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addToCartAction } from '../../store/reducer/cartReducer';

export default function ProductCard({ id, title,discont_price, image, price }) {
	
	const dispatch = useDispatch();
  return (
    
	  <div className={s.card_item}>
		  <Link to={`/products/${id}`}>
			  <div className={s.card}> 
       <img src={`http://localhost:3333${image}`} alt={title} />
        
				  {discont_price && <p>Discount: {discont_price}$</p>}
				  
				  {!discont_price && <p>Price: {price}$</p>}
				  
          <p>{title}</p> 
        </div>
      </Link>
       <div 
        className={s.add_btn}
        onClick={() => dispatch(addToCartAction({ id, image, title, price, discont_price }))}
      >
        Add to cart
      </div>
    </div>
   
  )
}


