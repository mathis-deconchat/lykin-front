import React, { useState } from "react";
import clsx from "clsx";

const HomeHeaderUserSelection = () => {
  const [user, setUser] = useState("Tous");

  return (
    <div className=" flex justify-center items-center w-full ">
      <div className=" relative mt-2 bg-gray-500 rounded-full w-5/6 mx-3">
        <div
          className={clsx(
            "absolute bg-white inset-y-0 w-1/3 rounded-full transition-transform transform duration-200",
            {
              "translate-x-0": user === "Tous",
              "translate-x-full": user === "Jacque",
              "translate-x-200": user === "Paul",
            }
          )}
        ></div>

        <div className="flex justify-between text-center">
          <div
            className={
              "w-full rounded-full z-10  " +
              (user == "Tous" ? "text-gray-800" : "text-white")
            }
          >
            <p
              className="inline-block h-full text-center p-1  z-30"
              onClick={() => setUser("Tous")}
            >
              Tous
            </p>
          </div>

          <div
            className={
              "w-full rounded-full  z-20 " +
              (user == "Jacque" ? "text-gray-800" : "text-white")
            }
          >
            <p
              className="inline-block h-full text-center p-1  z-30"
              onClick={() => setUser("Jacque")}
            >
              Jacque
            </p>
          </div>

          <div
            className={
              "w-full rounded-full  z-20 " +
              (user == "Paul" ? "text-gray-800" : "text-white")
            }
          >
            <p
              className="inline-block h-full text-center p-1  z-30"
              onClick={() => setUser("Paul")}
            >
              Paul
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeaderUserSelection;
