import { loadProductsByCategoryAction } from "../store/reducers/productsByCategoryReducer";

export const getProductsByCategory = (id) => {
  return (dispatch) => {
    fetch(`http://localhost:3333/products/${id}`)
      .then((res) => res.json())
      .then((json) => dispatch(loadProductsByCategoryAction(json)));
  };
};

export const getAllProducts = () => {};
