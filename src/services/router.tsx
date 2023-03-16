import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LayoutCommon from '../layout/layout-common';
import LoginPage from '../pages/auth/login-page';
import HomePage from '../pages/home/home-page';


const AppRouter = () => {
  return (
    <Router>
        <Routes>
            <Route element={<LayoutCommon></LayoutCommon>}>
                <Route path="/" element={<HomePage></HomePage>}></Route>
            </Route>
            <Route path="/login" element={<LoginPage/>}></Route>
        </Routes>
    </Router>
  )
}

export default AppRouter