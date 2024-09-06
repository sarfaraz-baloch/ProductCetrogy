import React from 'react'
import { Outlet } from 'react-router-dom'
// import MyNavbar from './MyNavbar'

function Layout() {
  return (
    <div>
      {/* <MyNavbar />   */}
      <Outlet />
    </div>
  )
}

export default Layout
