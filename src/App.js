import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/homePage'
import InfiniteScroll from './pages/practice/infiniteScroll'
import Product from './pages/product'
import Login from './pages/login'
import Register from './pages/register'
import PageNotFound from './pages/pageNotFound'
import ProgressBar from './pages/practice/progressBar'
import StarRating from './pages/practice/starRating'
import Faq from './pages/practice/faq'
import SearchBar from './pages/practice/searchBar'
import { Navigate, Outlet } from 'react-router-dom';
import FolderTest from './pages/practice/folderTest'

const App = () => {

  const ProtectedRoute = () => {
    const isLoggedIn = JSON.parse(localStorage.getItem('login credentials'));
    return (
      isLoggedIn !== null ? <Outlet /> : <Navigate to={'/login'} />
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
              element={<HomePage />}
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
          {/* practice routes */}
          <Route
            path="/faq"
            element={<Faq />}
          ></Route>
          <Route
            path="/infiniteScroll"
            element={<InfiniteScroll />}
          ></Route>
          <Route
            path="/progressBar"
            element={<ProgressBar />}
          ></Route>
          <Route
            path="/starRating"
            element={<StarRating />}
          ></Route>
          <Route
            path="/searchbar"
            element={<SearchBar />}
          ></Route>
          <Route
            path="/folder"
            element={<FolderTest />}
          ></Route>

        </Routes>
      </Router>
    </>
  )
}

export default App
