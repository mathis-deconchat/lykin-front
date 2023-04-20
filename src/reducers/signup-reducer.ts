//Types
import { SignUpState, SignUpAction } from "../contexts/signup-context";
import { Reducer } from "react";

const signupReducer: Reducer<SignUpState, SignUpAction> = (state, action): SignUpState => {
  switch (action.type) {
    case "value":
      return state;

    default:
      return state;
  }
};

export default signupReducer;

// Convert this date 2023-04-18T19:08:50.840777 Restauration to yyyy-mm 
const date = "2023-04-18T19:08:50.840777";
const date2 = date.split("T")[0];
const date3 = date2.split("-")[0] + "-" + date2.split("-")[1];
