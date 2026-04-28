import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import Home from "./Routercomponents/Home";
import About from "./Routercomponents/About";
import OrderSummary from "./Routercomponents/OrderSummary";
import OrderPage from "./Routercomponents/OrderPage";

import Product from "../Routercomponents/Products";
import FeaturedProduct from "../Routercomponents/FeaturedProduct";
import New from "../Routercomponents/New";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/">Home</NavLink>{" | "}
        <NavLink to="/about">About</NavLink>{" | "}
        <NavLink to="/products">Products</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/summary" element={<OrderSummary />} />

        {/* Parent route */}
        <Route path="/products" element={<Product />}>
          <Route path="features" element={<FeaturedProduct />} />
          <Route path="new" element={<New />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;