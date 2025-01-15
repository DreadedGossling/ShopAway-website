import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navigate, Outlet } from 'react-router-dom';
import Home from './pages/dashboard'
import Product from './pages/product'
import Login from './pages/login'
import Register from './pages/register'
import PageNotFound from './pages/pageNotFound'

const App = () => {

  const ProtectedRoute = () => {
    const isLoggedIn = JSON.parse(localStorage.getItem('login credentials'));
    return (
      isLoggedIn ? <Outlet /> : <Navigate to={'/login'} />
    )
  }

  return (
    <>
      <Router>
        <Routes>
          {/* protected routes */}

          <Route element={<ProtectedRoute />}>
            <Route
              path="/"
              element={<Home />}
            ></Route>
            <Route
              path="/product/:id"
              element={<Product />}
            ></Route>
          </Route>

          {/* login routes */}

          <Route
            path="/login"
            element={<Login />}
          ></Route>
          <Route
            path="/register"
            element={<Register />}
          ></Route>

          {/* error routes */}

          <Route
            path="*"
            element={<PageNotFound />}
          ></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
