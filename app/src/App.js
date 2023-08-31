import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import NavMenu from "./components/NavMenu";
import MainPage from "./pages/MainPage";
import AllCategoriesPage from "./pages/AllCategoriesPage";
import AllProductsPage from "./pages/AllProductsPage";
import ProductsByCategoryPage from "./pages/ProductsByCategoryPage";
import SingleProductPage from "./pages/SingleProductPage";
import CartPage from "./pages/CartPage";
import NotFoundPage from "./pages/NotFoundPage";
import { getAllCategories } from "./requests/categories_req";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(getAllCategories), []);

  return (
    <div>
      <NavMenu />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/categories" element={<AllCategoriesPage />} />
        <Route
          path="/categories/:category"
          element={<ProductsByCategoryPage />}
        />
        <Route path="/products" element={<AllProductsPage />} />
        <Route path="/products/:id" element={<SingleProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
