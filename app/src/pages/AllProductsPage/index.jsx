import React from 'react'
import { useSelector } from 'react-redux'
import ProductsContainer from '../../components/ProductsContainer'
import FilterForm from '../../components/FilterForms/FilterForm'
import SortForm from '../../components/FilterForms/SortForm'
import DiscountForm from '../../components/FilterForms/DiscountForm'


export default function AllProductsPage() {

  const all_products_state = useSelector(state => state.allProducts)

  // console.log(all_products_state);

  return (
	  <div> 
		  <FilterForm />
		  <br />
		  <DiscountForm />
		   <br />
      <SortForm />
      <br />
		  
      <ProductsContainer products={all_products_state} />
    </div>
  )
}
