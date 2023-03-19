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
    lastname:string,
    email: string,
    password: string
  ) => Promise<Result>;
  confirmSignUp: (username: string, code: string) => Promise<Result>;
//   resendCode: (username: string) => Promise<Result>;
//   getCurrentSession: () => Promise<Result>;
//   isLoggedIn: () => boolean;
  setIsAuthenticated: (value: boolean) => void;
}

interface Result {
  success: boolean;
  message: string;
  errorMessage?: any
}

export const authContext = createContext({} as UseAuth);
