import { loadProductsByCategoryAction } from "../store/reducers/productsByCategoryReducer";

export const getProductsByCategory = (category) => {
  return (dispatch) => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((json) => dispatch(loadProductsByCategoryAction(json)));
  };
};

export const getAllProducts = () => {};
