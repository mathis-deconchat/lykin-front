import { Auth } from "aws-amplify";
import React, { useContext, useEffect, useState } from "react";
import { authContext, UseAuth } from "../../contexts/auth-context";
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';


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
  const [isLoading, setIsLoading] = useState(false);
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




  const updateUserAttributes = async (attributes: any) => {
    try {
      const result = await Auth.updateUserAttributes(
        await Auth.currentAuthenticatedUser(),
        {
          name : attributes.firstName,
          family_name : attributes.lastName,
          nickname : attributes.pseudo,
        }
      );
      return { success: true, message: "Updated user attributes" };
    } catch (e: unknown) {
      return { success: false, message: e as string };
    }
  };

  const signIn = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const result = await Auth.signIn(email, password);
      setIsAuthenticated(true);
      setUsername(result.username);
      setIsLoading(false);
      return { success: true, message: "Signed in successfully" };
    } catch (e: unknown) {
      setIsLoading(false);
      return { success: false, message: e as string };
    }
  };

  const signInWithGoogle = async () => {
    setIsLoading(true);
    const result = await Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Google });
    console.log("signInWithGoogle result", result)
    try {
      setIsAuthenticated(true);
      
      setIsLoading(false);
      return { success: true, message: "Signed in successfully" };
    } catch (e: unknown) {
      console.log(e);
      setIsLoading(false);
      return { success: false, message: e as string };
    }
  };


  const signUp = async (
    username: string,
    email: string,
    password: string
  ) => {
    setIsLoading(true);
    try {
      let result = await Auth.signUp({
        username,
        password,
        attributes: {
          email,
        },
        autoSignIn: {
          enabled: true,
        }       
        
      });
      console.log("signUp result", result)
      setIsLoading(false);
      return { success: true, message: "Signed up successfully" };
    } catch (e: unknown) {
      console.log(e);
      setIsLoading(false);
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
    console.log('signingout')
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

  const resendConfirmationCode = async (username: string) => {
    try {
      await Auth.resendSignUp(username);
      return { success: true, message: "Confirmation code resent" };
    } catch (e: unknown) {
      return { success: false, message: e as string };
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
    resendConfirmationCode,
    updateUserAttributes,
    signInWithGoogle
  };
};
