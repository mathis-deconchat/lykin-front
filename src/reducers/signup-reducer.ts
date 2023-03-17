//Types
import { SignUpState, SignUpAction } from "../contexts/signup-context";
import { Reducer } from "react";

const signupReducer: Reducer<SignUpState, SignUpAction> = (state, action) => {
  switch (action.type) {
    case "value":
      return state;

    default:
      return state;
  }
};

export default signupReducer;
