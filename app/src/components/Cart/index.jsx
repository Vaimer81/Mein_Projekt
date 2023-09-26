import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from '../CartItem';
import s from './index.module.css'
import { clearCartAction } from '../../store/reducer/cartReducer';


export default function Cart() {

  const cart_state = useSelector(state => state.cart);

  const dispatch = useDispatch();

  const total = cart_state.reduce((acc, { price, discont_price, count }) => {
	const totalPrice = discont_price ? discont_price : price  
	return acc + totalPrice * count} , 0)

	const [phoneNumber, setPhoneNumber] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      
      // Вы можете здесь выполнить необходимые действия с номером телефона,
      // например, отправить его на сервер для обработки.
      alert(`Заказ размещен с номером телефона: ${phoneNumber}`);
  };


	return (
		<div>
			{/* <p>Cart:</p> */}
			<div>
			{
				cart_state.map(el => <CartItem key={el.id} {...el} />)
			}
			</div>
			<div className={s.clear_btn}
			onClick={() => dispatch(clearCartAction())}
			>
			  Clear cart
			  </div>
			

			  <form onSubmit={handleSubmit} className={s.order}>
            <p>Order details</p>
			<p>Total: {total.toFixed(2)}$</p>
            <input
              type="number"
              placeholder="Phone number"
              name="phone"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
        />
            <button type="submit">Order</button>
          </form>

		</div>
	  )
	}