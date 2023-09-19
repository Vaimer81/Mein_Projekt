import React from 'react'
import DiscountForm from './DiscountForm'
import FilterForm from './FilterForm'
import SortForm from './SortForm'
import s from './index.module.css'

export default function FilterForms() {
  return (
	<div className={s.form-container}>
<DiscountForm/>
<FilterForm/>
<SortForm/>
	</div>
  )
}
