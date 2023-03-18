import React from "react";
import { Outlet } from "react-router-dom";
import BottomNav from "../components/common/bottom-nav";
import HeaderNav from "../components/common/header-nav";

const HomeLayout = () => {
  return (
    <div className="flex flex-col max-h-screen h-screen justify-between">
      <div className="bg-transparent h-fit w-full">
        <HeaderNav isPage={false} />
      </div>

      <div className="overflow-y-auto h-full">
        <Outlet />
      </div>

      <div className="bg-gray-100">
        <BottomNav />
      </div>
    </div>
  );
};

export default HomeLayout;
