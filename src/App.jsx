import React from "react";
import {BrowserRouter,  Routes,Route,NavLink} from "react-router-dom"
import Home from "./Routercomponents/Home";
import About from "./Routercomponents/About";
import "./index.css";
import OrderSummary from "./Routercomponents/OrderSummary";
import OrderPage from "./Routercomponents/OrderPage";

function App () {
    return (
        <BrowserRouter>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
        </nav>
        
      <Routes>
        <Route path="/"element={<Home/>}/>
        <Route path="/about"element={<About/>}/>
        <Route path="/order" element={<OrderPage />} />
        <Route path="/summary"element={<OrderSummary/>}/>
      </Routes>
      </BrowserRouter>
    );

}
export default App;