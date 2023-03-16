import React from "react";
import { Outlet } from "react-router-dom";
import BottomNav from "../components/common/bottom-nav";
import HeaderNav from "../components/common/header-nav";

const LayoutCommon = () => {
  return (
    <div className="bg-gradient-to-t from-blue-200 via-gray-600 to-gray-900 min-h-screen min-w-screen ">
      <HeaderNav />

      <Outlet />

      <BottomNav />
    </div>
  );
};

export default LayoutCommon;
