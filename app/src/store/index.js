import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "./reducer/cartReducer";
import { singleProductReducer } from "./reducer/singleProductReducer";
import { allProductsReducer } from "./reducer/allProductsReducer";
import { productsByCategoryReducer } from "./reducer/productsByCategoryReducer";
import { categoriesReducer } from "./reducer/categoriesReducer";
import { salesReducer} from "./reducer/salesReducer"

const rootReducer = combineReducers({
  categories: categoriesReducer,
  productsByCategory: productsByCategoryReducer,
  allProducts: allProductsReducer,
  singleProduct: singleProductReducer,
  cart: cartReducer,
  sales: salesReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
