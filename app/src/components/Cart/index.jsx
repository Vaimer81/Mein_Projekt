import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from '../CartItem';
import s from './index.module.css'
import { clearCartAction } from '../../store/reducer/cartReducer';


export default function Cart() {

  const cart_state = useSelector(state => state.cart);

  const dispatch = useDispatch();

 // Вычисляем общую сумму корзины с учетом скидок
	
	const total = cart_state.reduce((acc, { price, discont_price, count }) => {
	  
    // Если есть скидка (discont_price), используем ее вместо обычной цены
	
    const itemPrice = discont_price ? discont_price : price;
    return acc + itemPrice * count;
  }, 0);

  return (
    <div>
      <p>Cart:</p>
      <div>
        {cart_state.map(el => <CartItem key={el.id} {...el} />)}
      </div>
      <div
        className={s.clear_btn}
        onClick={() => dispatch(clearCartAction())}
      >
        Clear cart
      </div>
      <p>Total: {total}$</p>
    </div>
  );
}