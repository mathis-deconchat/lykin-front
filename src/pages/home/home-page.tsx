import React from "react";
import HomeHeader from "../../components/home/home-header";
import OperationPage from "./operations-page";

const HomePage = () => {
  return (
    <div className="w-full h-screen flex flex-col mb-14">
      <section className="h-1/4 flex flex-col mb-6">
        <HomeHeader/>
      </section>
      <section className="  shadow-white shadow-2xl mb-28">
        <OperationPage />
      </section>
    </div>
  );
};

export default HomePage;
