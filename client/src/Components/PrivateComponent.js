import React from 'react'
import {Navigate, Outlet } from 'react-router-dom'


const PrivateComponent = () => {
  return (
      <>
         {localStorage.getItem('token') ?<Outlet/> : <Navigate  to='/register'/>}
    </>
  )
}

export default PrivateComponent