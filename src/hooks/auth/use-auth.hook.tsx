import { Auth } from "aws-amplify";
import React, { useContext, useEffect, useState } from "react";
import { authContext, UseAuth } from "../../contexts/auth-context";

import { AwsConfigAuth } from "../../config/auth/auth-config";
// Amplify.configure({ Auth: AwsConfigAuth });
Auth.configure({ Auth: AwsConfigAuth });

type Props = {
  children?: React.ReactNode;
};

export const ProvideAuth: React.FC<Props> = ({ children }) => {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export const useAuth = () => {
  return useContext(authContext);
};

const useProvideAuth = (): UseAuth => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState<number>();

  useEffect(() => {
    getCurrentAuthUser();
  }, []);

  const getCurrentAuthUser = async () => {
    try {
      if (!isLoading) setIsLoading(true);
      const authUser = await Auth.currentAuthenticatedUser();
      setUsername(authUser.username);
      setIsAuthenticated(true);
    } catch (e) {
      setUsername("");
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      const result = await Auth.signIn(email, password);
      setIsAuthenticated(true);
      setUsername(result.username);
      return { success: true, message: "Signed in successfully" };
    } catch (e: unknown) {
      return { success: false, message: e as string };
    }
  };

  const signUp = async (
    username: string,
    lastname: string,
    email: string,
    password: string
  ) => {
    try {
      const result = await Auth.signUp({
        username,
        password,
        attributes: {
          email,
          family_name: lastname,
          name: username,
        },
      });
      return { success: true, message: "Signed up successfully" };
    } catch (e: unknown) {
      return { success: false, message: e as string };
    }
  };

  const confirmSignUp = async (username: string, code: string) => {
    try {
      const result = await Auth.confirmSignUp(username, code);
      return { success: true, message: "Signed up successfully" };
    } catch (e: unknown) {
      return { success: false, message: e as string };
    }
  };


  const signOut = async () => {
    try {
      await Auth.signOut();
      setUsername("");
      setIsAuthenticated(false);
      return { success: true, message: "Logged out" };
    } catch (error) {
      return {
        success: false,
        message: "LOGOUT FAIL",
      };
    }
  };

  return {
    isLoading,
    isAuthenticated,
    username,
    userId,
    signIn,
    signOut,
    signUp,
    confirmSignUp,
    setIsAuthenticated,
  };
};
