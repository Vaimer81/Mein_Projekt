import { loadAllProductsAction } from "../store/reducer/allProductsReducer"
import { loadProductsByCategoryAction } from "../store/reducer/productsByCategoryReducer"
import { loadSingleProductAction } from "../store/reducer/singleProductReducer"

export const getProductsByCategory = (id) => {
  return dispatch => {
  fetch(`http://localhost:3333/categories/${id}`)
    .then(res => res.json())
    .then(json => dispatch(loadProductsByCategoryAction(json.data)))
}
}


export const getAllProducts = dispatch => {
  fetch('http://localhost:3333/products/all')
      .then(res => res.json())
      .then(json => dispatch(loadAllProductsAction(json)))
}


export const getSingleProduct = (id) => {
  return dispatch => {
  fetch(`http://localhost:3333/products/${id}`)
    .then(res => res.json())
    .then(json => dispatch(loadSingleProductAction(json[0])))
}
}

