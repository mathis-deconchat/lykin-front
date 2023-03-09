import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LayoutCommon from '../layout/layout-common';
import HomePage from '../pages/home/home-page';


const AppRouter = () => {
  return (
    <Router>
        <Routes>
            <Route element={<LayoutCommon></LayoutCommon>}>
                <Route path="/" element={<HomePage></HomePage>}></Route>
            </Route>
        </Routes>
    </Router>
  )
}

export default AppRouter