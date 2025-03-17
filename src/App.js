import "./App.css";
import Navbar from "./components/navbar/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./components/pages/Shop";
import ShopCategory from "./components/pages/ShopCategory";
import Product from "./components/pages/Product";
import LoginSignup from "./components/pages/LoginSignup";
import Cart from "./components/pages/Cart";
import men_banner from "./components/assets/banner_mens.png";
import women_banner from "./components/assets/banner_women.png";
import kid_banner from "./components/assets/banner_kids.png";
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Shop />} />
          <Route
            path="/mens"
            exact
            element={<ShopCategory banner={men_banner} category="men" />}
          />
          <Route
            path="/women"
            exact
            element={<ShopCategory banner={women_banner} category="women" />}
          />
          <Route
            path="/kids"
            exact
            element={<ShopCategory banner={kid_banner} category="kid" />}
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" exact element={<Cart />} />
          <Route path="/login" exact element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
