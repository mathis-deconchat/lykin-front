import React from "react";
import Lottie from "lottie-react";
import successAnimation from "../../../../../../assets/success.json";
import { useNavigate } from "react-router-dom";

const Step6Congratulations = () => {
  const navigate = useNavigate();
  return (
    <div className="h-full w-full flex items-center flex-col justify-between">
      <div>
        <Lottie
          animationData={successAnimation}
          loop={false}
          className="h-64 mt-28 "
        />
      </div>
      <button
        className="bg-black p-3 px-2 w-full text-lg rounded-lg text-white disabled:bg-gray-300 disabled:text-gray-500 mb-8"
        onClick={() => navigate("/")}
      >
        Commencer
      </button>
    </div>
  );
};

export default Step6Congratulations;
