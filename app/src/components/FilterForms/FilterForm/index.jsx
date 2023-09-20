import React from 'react'
import { useDispatch } from 'react-redux'
import { filterProductsAction } from '../../../store/reducer/allProductsReducer'
import s from '../index.module.css'

export default function FilterForm() {

    const dispatch = useDispatch()

    const submit = e => {
        e.preventDefault()
        const { min, max } = e.target
        const min_value = min.value || 0
        const max_value = max.value || Infinity
        dispatch(filterProductsAction({ min_value, max_value}))
    }

  return (
    <form className={s.filter} onSubmit={submit}>
        <p> Price
     <input type='number' placeholder='min' name='min'/>
        <input type='number' placeholder='max' name='max'/>
        <button> Filter </button>
		</p> 
    </form>
  )
}

