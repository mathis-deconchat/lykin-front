import React, { ReactElement } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { BellIcon } from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/24/solid";
import { useAuth } from "../../hooks/auth/use-auth-hook";
import { useNavigate } from "react-router-dom";

type Props = {
  isPage?: boolean;
};

const HeaderNav: React.FC<Props> = (props) => {
  const navigate = useNavigate();

  const auth = useAuth();
  return (
    <div
      className={
        " z-20 top-0 h-fit w-full flex justify-between items-center mb-5 rounded-xl"
      }
    >
      <div className="rounded-full p-2 bg-gray-500 ml-3 mt-6 bg-opacity-30">
        <Bars3Icon className="h-7 w-7 text-white stroke-2 " />
      </div>
      <div className="flex mr-3 mt-6 items-center ">
        <p className="text-white text-sm mr-3 px-2 py-1 bg-blue-700 rounded-full font-semibold flex items-center min-w-[80px]">
          <UserIcon
            className="h-4 w-4 mr-2 text-white"
            onClick={() => navigate("/setup-profile")}
          ></UserIcon>{" "}
          {auth.username ? auth.username : "User"}
        </p>

        <div className="rounded-full p-2 bg-gray-500  bg-opacity-30">
          <BellIcon className="h-7 w-7 text-white stroke-2 " />
        </div>
      </div>
    </div>
  );
};

export default HeaderNav;
