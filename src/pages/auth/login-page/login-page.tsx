//Libraries
import React from "react";

//Components
import AuthHeader from "../../../components/auth/auth-header";
import GoogleLoginButton from "../../../components/auth/google-login-button";
import Divider from "../../../components/common/divider";

//Forms
import LoginForm from "../../../components/auth/forms/auth/login-form/login-form";
import { useAuth } from "../../../hooks/auth/use-auth-hook";
import { useForm } from "react-hook-form";

const LoginPage = () => {

  return (
    <div className="h-screen w-screen bg-gradient-to-t from-blue-200 via-gray-600 to-gray-900 flex flex-col">
      <AuthHeader login={true} />

      <div className="grow w-full bg-gray-100 rounded-t-xl p-5 z-10">
        <div className="flex flex-col w-full mt-2 items-center justify-center z-10">
          <p className="text-2xl font-bold mb-6">Heureux de vous revoir !</p>

          <GoogleLoginButton />

          <Divider
            lightColor="bg-gray-300"
            darkColor="dark:bg-gray-700"
            text="ou"
            lightBgColor="bg-gray-100"
            darkBgColor="dark:bg-gray-800"
            lightTextColor="text-gray-300"
            darkTextColor="dark:text-white"
          />

          <p className="text-gray-400 mb-5">Renseigner vos informations ci-dessous</p>

          <div className="items-center w-full">
            <div className="flex flex-col justify-center">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
