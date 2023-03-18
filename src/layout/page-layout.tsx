import React from "react";
import { Outlet } from "react-router-dom";
import BottomNav from "../components/common/bottom-nav";
import HeaderNav from "../components/common/header-nav";

const PageLayout = () => {
  return (
    <>
    <div className="flex flex-col max-h-screen h-screen justify-between">
      <div className="bg-transparent h-fit w-full">
        <HeaderNav isPage={false} />
      </div>

      <div className="h-[calc(100%+10rem)] rounded-t-2xl bg-gray-100 overflow-x-auto">
        <Outlet />
      </div>

      <div className="bg-gray-100">
        <BottomNav />
      </div>
    </div>
    </>
  );
};

export default PageLayout;
