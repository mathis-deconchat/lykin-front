import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderNav from '../components/common/header-nav'

const LayoutCommon = () => {
  return (
    <div>
      <HeaderNav/>
      <Outlet/>
    </div>
  )
}

export default LayoutCommon