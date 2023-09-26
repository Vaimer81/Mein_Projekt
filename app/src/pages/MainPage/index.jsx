import React, { useEffect } from 'react'
import sale_img from '../../Media/sale_img.png'
import { Link } from 'react-router-dom'
import CategoriesContainer from '../../components/CategoriesContainer'
import ProductsContainer  from '../../components/ProductsContainer'
import s from './index.module.css'
import gnome from '../../Media/gnome.png'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../request/products_req'
import {useForm} from 'react-hook-form'
export default function MainPage() {
	const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onChange'
    });

	const phoneNumberRegister = register('phoneNumber', {
        required: "*This field is required",
        pattern: {
            value: /^(?:\+49|0)[1-9][0-9]*(?:[\s-]?\d+)*$/,
            message: '*Please, enter valid phoneNumber address'
        }
    });

	const submit = data => console.log(data);

  const dispatch = useDispatch()

  useEffect(() => { dispatch(getAllProducts) }, [dispatch])

  const products = useSelector(state => state.allProducts)

  const first_four_products = products.filter(el => el.discont_price !== null).slice(0,4)

  // console.log(first_four_products);
  

  return (
    <div>
      

      <div className={s.sale_container}>
        <div className={s.image}>
          <div className={s.text}>
		  <p>Sale</p>
		  <p>New season</p>         
		  <Link to={'/sales'} className={s.sale_btn}>
               Sale
            </Link>
          </div>

        </div>
      </div>



      <div className={s.catalog_container}>
        <div className={s.btn_container}>
          <h2>Catalog</h2>
          <Link to='/categories' >
            <div className={s.btn_cat}>All categories</div>
          </Link>
        </div>
        <CategoriesContainer limit={3} />
      </div>



      <div className={s.dwarf_wrapper}>
        <img src={gnome} alt="Gnome" />
        <div className={s.discount_descr}>
          <h1>5% off</h1>
          <h2>on the first order</h2>
          <form onSubmit={handleSubmit(submit)}>
                        <input
                            type="text"
                            placeholder='+49' name='phoneNumber'
                            {...phoneNumberRegister}
                        />

                        {errors.phoneNumber && <p className={s.error_msg}>{errors.phoneNumber?.message}</p>}



                        <button>Get a discount</button>
                    </form>
        </div>
      </div>



      <div className={s.gen_sale_container}>
        <h3>Sale</h3>
        <div>

          <ProductsContainer products={first_four_products} productsStyle={true}/>         

        </div>
      </div>

    </div>

    

  )
}
