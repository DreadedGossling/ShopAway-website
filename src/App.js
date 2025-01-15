import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navigate, Outlet } from 'react-router-dom';
import Home from './pages/dashboard'
import InfiniteScroll from './pages/practice/infiniteScroll'
import Product from './pages/product'
import Login from './pages/login'
import Register from './pages/register'
import PageNotFound from './pages/pageNotFound'
import ProgressBar from './pages/practice/progressBar'
import StarRating from './pages/practice/starRating'
import Faq from './pages/practice/faq'
import SearchBar from './pages/practice/searchBar'
import FolderTest from './pages/practice/folderTest'
import AlphabetsQuery from './pages/practice/alphabetsQuery'
import FilterProduct from './pages/practice/filterProduct'
import Dropdown from './pages/practice/dropdown';
import ListNewItem from './pages/practice/listNewItem';
import CloudTest from './pages/practice/cloudTest';

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
          {/* practice routes */}
          <Route
            path="/alphabets"
            element={<AlphabetsQuery />}
          ></Route>
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
          <Route
            path="/filterProduct"
            element={<FilterProduct />}
          ></Route>
          <Route
            path="/dropdown"
            element={<Dropdown />}
          ></Route>
          <Route
            path="/listItem"
            element={<ListNewItem />}
          ></Route>
          <Route
            path="/cloudTest"
            element={<CloudTest />}
          ></Route>

        </Routes>
      </Router>
    </>
  )
}

export default App
