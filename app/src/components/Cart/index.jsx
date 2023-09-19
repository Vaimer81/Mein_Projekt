import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from '../CartItem';
import s from './index.module.css'
import { clearCartAction } from '../../store/reducer/cartReducer';


export default function Cart() {

  const cart_state = useSelector(state => state.cart);

  const dispatch = useDispatch();

  const total = cart_state.reduce((acc, { price, discont_price, count }) => {
	// Если есть скидка (discont_price) и она больше 0, используем ее, иначе используем обычную цену
	const itemPrice = discont_price && discont_price > 0 ? discont_price : price;
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