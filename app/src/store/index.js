import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import { categoriesReducer } from "./reducer/categoriesReducer";
import { productsByCategoryReducer } from "./reducer/productsByCategoryReducer";
import { allProductsReducer } from "./reducer/allProductsReducer";
import { singleProductReducer } from "./reducer/singleProductReducer";
import { productsReducer } from "./reducer/productReducer";

const rootReducer = combineReducers({
    categories: categoriesReducer,
    productsByCategory: productsByCategoryReducer,
    allProducts: allProductsReducer,
    singleProduct: singleProductReducer,
    cartProducts: productsReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));