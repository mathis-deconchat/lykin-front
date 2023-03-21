import React from "react";
import SvgIcon from "./svg-icon";
import { ReactComponent as Logo } from "../../assets/icons/3d-cube-scan.svg";
import { BanknotesIcon } from "@heroicons/react/24/outline";

import { HomeIcon as HomeIconOutline } from "@heroicons/react/24/outline";
import { HomeIcon as HomeIconSolid } from "@heroicons/react/24/solid";

import { AdjustmentsHorizontalIcon as AdjustmentsHorizontalIconOutline } from "@heroicons/react/24/outline";
import { AdjustmentsHorizontalIcon as AdjustmentsHorizontalIconSolid } from "@heroicons/react/24/solid";

import { ListBulletIcon as ListIconBulletOutline } from "@heroicons/react/24/outline";
import { ListBulletIcon as ListIconBulletSolid} from "@heroicons/react/24/solid";


import { Squares2X2Icon } from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/24/solid";
import { ChartPieIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const BottomNav = () => {
  const [selected, setSelected] = React.useState("home");
  return (
    <div className="fixed bottom-0 w-full pb-3 bg-white rounded-t-2xl shadow-xl z-10">
      <div className="flex flex-col">
        <div>
          <div className="bg-blue-600 rounded-full h-16 w-16 -mt-4 border-8 border-white flex justify-center items-center ml-auto mr-auto">
            <PlusIcon className="h-6 w-6 text-white stroke-2" />
          </div>
          <div className="flex justify-around -mt-9">
            <Link to={'/'}>
            {selected === "home" ? (
              <HomeIconSolid className="h-8 w-8 text-blue-500 stroke-2" />
            ) : (
              <HomeIconOutline
                className="h-8 w-8 text-gray-500"
                onClick={() => setSelected("home")}
              />
            )}
            </Link>
            <Link to={'/p/charts'}>

            {selected === "chart" ? (
              <ChartPieIcon className="h-8 w-8 text-blue-500 stroke-2" />
            ) : (
              <ChartPieIcon
                className="h-8 w-8 text-gray-500"
                onClick={() => setSelected("chart")}
              />
            )}
            </Link>

            <div className="ml-8 mr-8"></div>
            <Link to={'/p/tasks'}>
            {selected === "tasks" ? (
              <ListIconBulletSolid className="h-8 w-8 text-blue-500 stroke-2" />
            ) : (
              <ListIconBulletOutline
                className="h-8 w-8 text-gray-500 "
                onClick={() => setSelected("tasks")}
              />
            )}
            </Link>
            <Squares2X2Icon className="h-8 w-8 text-gray-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
