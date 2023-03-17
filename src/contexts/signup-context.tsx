//Libraries
import React from "react";

//Hooks
import { useReducer, useContext } from "react";

//Methods
import { createContext } from "react";

//Reducer
import signupReducer from "../reducers/signup-reducer";

//Types
import { Dispatch } from "react";

export interface SignUpState {
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  home: string;
}

export interface SignUpAction {
  type: string;
}

interface SignUpProviderProps {
  children: JSX.Element;
}

const initialState: SignUpState = {
  email: "",
  firstName: "",
  lastName: "",
  username: "",
  home: "",
};

const SignUpContext = createContext<SignUpState>(initialState);
const SignUpDispatchContext = createContext<Dispatch<SignUpAction>>(() => {});

export const SignUpProvider: React.FC<SignUpProviderProps> = ({ children }) => {
  const [userInfos, dispatch] = useReducer(signupReducer, initialState);

  const defaultState: SignUpState = {
    email: userInfos.email,
    firstName: userInfos.firstName,
    lastName: userInfos.lastName,
    username: userInfos.username,
    home: userInfos.home,
  };

  return (
    <SignUpContext.Provider value={defaultState}>
      <SignUpDispatchContext.Provider value={dispatch}>
        {children}
      </SignUpDispatchContext.Provider>
    </SignUpContext.Provider>
  );
};

export const useSignUp = () => useContext(SignUpContext);
export const useSignUpDispatch = () => useContext(SignUpDispatchContext);
