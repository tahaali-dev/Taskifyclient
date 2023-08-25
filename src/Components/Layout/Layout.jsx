import React from 'react'
import { Outlet } from 'react-router-dom'
import Navabr from '../Navbar/Navabr'
import FooterSec from '../FooterSec/FooterSec'

const Layout = () => {
  return (
    <>
       <Navabr />
      <Outlet />
      <FooterSec/>
    </>
  )
}

export default Layout
