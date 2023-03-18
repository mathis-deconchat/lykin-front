import React, { useState } from 'react'
import HomeHeaderSpending from './home-header-spending';
import HomeHeaderUserSelection from './home-header-user-selection';

const HomeHeader = () => {
    const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <>
    <div className=" rounded-t-2xl text-white w-full flex items-center justify-center">

        <div className='w-full'>

        <HomeHeaderUserSelection/>
        <HomeHeaderSpending/>
        </div>
        </div>
        <div className="">
          <div className="m-3 mx-6 mt-3">
            <p className="text-white text-sm text-opacity-90 mb-1">Objectif du mois : <span className="font-bold">250/500</span></p>
            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
              <div
                className="bg-blue-600 text-sm font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                style={{ width: "50%" }}
              >
                50%
              </div>
            </div>
          </div>
        </div>
        </>
  )
}

export default HomeHeader