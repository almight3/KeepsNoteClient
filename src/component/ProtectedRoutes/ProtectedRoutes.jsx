import React from 'react'
import {Outlet, Navigate} from "react-router-dom";
import { useAuth } from '../../Context/Provider/AuthProvider'
function ProtectedRoutes({children}) {
  const {authState:{isAuthenticated}} = useAuth();
  
  return (
    <>
        { isAuthenticated ? <Outlet /> : <Navigate to="/login" />}
    </>
  )
}

export default ProtectedRoutes