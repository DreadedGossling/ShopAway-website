import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {

  const isLoggedIn = JSON.parse(localStorage.getItem('login credentials'));

  return (
    isLoggedIn !== null ? <Outlet /> : <Navigate to={'/login'} />
  )
}

export default ProtectedRoute
