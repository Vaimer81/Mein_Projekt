import React from 'react'
import { useSelector } from 'react-redux';
import CategoryCard from '../CategoryCard';

export default function CategoriesContainer() {
	const categories_state = useSelector(state => state.categories);
  return (
	<div>{
        categories_state.map(el => <CategoryCard key={el.id} {...el} />)
	  }
	  </div>
  )
}
