import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import Home from "../Routercomponents/Home";
import Profile from "../Routercomponents/Profile";
import AuthProvider from "../Routercomponents/Auth";
import Login from "../Routercomponents/Login";
import ProtectedRoute from "../Routercomponents/ProtectedRoute";

// Lazy Loading
const About = lazy(() => import("../Routercomponents/About"));

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <nav>
          <NavLink to="/">Home</NavLink>{" | "}
          <NavLink to="/about">About</NavLink>{" | "}
          <NavLink to="/profile">Profile</NavLink>
        </nav>

        <Suspense fallback={<h2>Loading...</h2>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />

            
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;