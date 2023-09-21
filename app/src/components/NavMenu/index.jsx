import React from 'react'
import { Link } from 'react-router-dom'
import s from './index.module.css'
import logoImage from '../../Media/image1.png'
import bag from '../../Media/vector.png'

export default function NavMenu() {
  return (
	  <div className={s.nav_menu}>  
     <img src={logoImage} alt="logo"/>   
      <Link to='/categories'>Catalog</Link>
      <Link to='/'>Main Page</Link>      
      <Link to='/products'>All Products</Link>
	  <Link to='/sales'>All sales</Link> 
      <Link to='/cart'><img src={bag} alt="vector"/> </Link> 
	             
    </div>
  )
}
