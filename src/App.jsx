import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import Home from "./Routercomponents/Home";
import About from "./Routercomponents/About";
import OrderSummary from "./Routercomponents/OrderSummary";
import OrderPage from "./Routercomponents/OrderPage";

import Product from "../Routercomponents/Products";
import FeaturedProduct from "../Routercomponents/FeaturedProduct";
import New from "../Routercomponents/New";
import User from "../Routercomponents/User";
import UserDetails from "../Routercomponents/UserDetails";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/">Home</NavLink>{" | "}
        <NavLink to="/about">About</NavLink>{" | "}
        <NavLink to="/products">Products</NavLink>{" | "}
        <NavLink to="/user">User</NavLink>
      </nav>

      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/summary" element={<OrderSummary />} />

        
        <Route path="/products" element={<Product />}>
          <Route index element={<FeaturedProduct />} />
          <Route path="features" element={<FeaturedProduct />} />
          <Route path="new" element={<New />} />
        </Route>

        
        <Route path="/user" element={<User />}>
        <Route path=":id" element={<UserDetails />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;