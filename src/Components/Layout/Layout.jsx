import React from 'react'
import { Outlet } from 'react-router-dom'
import Navabr from '../Navbar/Navabr'

const Layout = () => {
  return (
    <>
       <Navabr />
      <Outlet />
    </>
  )
}

export default Layout
