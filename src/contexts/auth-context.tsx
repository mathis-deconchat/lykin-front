import { createContext } from "react";

export interface UseAuth {
  isLoading: boolean;
  isAuthenticated: boolean;
  username: string;
  userId : number | undefined,
  signIn: (username: string, password: string) => Promise<Result>;
  signOut: () => void;
  signUp: (
    username: string,
    email: string,
    password: string
  ) => Promise<Result>;
  confirmSignUp: (username: string, code: string) => Promise<Result>;
  setIsAuthenticated: (value: boolean) => void;
  resendConfirmationCode: (username: string) => Promise<Result>;
  updateUserAttributes: (attributes: any) => Promise<Result>;
  signInWithGoogle: () => Promise<Result>;
  getCurrentAuthUser: () => Promise<void>;
}

interface Result {
  success: boolean;
  message: string;
  errorMessage?: any
}

export const authContext = createContext({} as UseAuth);
