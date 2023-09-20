import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getDiscountProductsAction } from '../../../store/reducer/allProductsReducer'
import s from '../index.module.css'


export default function DiscountForm() {
    const dispatch = useDispatch()

    const [ checkboxChecked, setCheckboxChecked ] = useState(false)

    const handleChange = () => setCheckboxChecked(!checkboxChecked)

    const get_discount_products = e => dispatch(getDiscountProductsAction(e.target.checked))

// console.log(checkboxChecked);

  return (
    <div className={s.discount} >
        <label>
            <p>Discounted items</p>
            <input type='checkbox' checked={checkboxChecked} onChange={handleChange} onClick={get_discount_products}/>
        </label>
    </div>
  )
}