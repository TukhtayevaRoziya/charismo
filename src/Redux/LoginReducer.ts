import { AddNameACType, LoginACType } from "../types";

const initialState = {
  isAuth: false,
  name: "",
};

type InitialStateType = typeof initialState;

const LoginReducer = (
  state = initialState,
  action: ActionType
): InitialStateType => {
  switch (action.type) {
    case "UPDATE_ISAUTH":
      return { ...state, isAuth: action.isAuth };
    case "ADD_NEW_NAME":
      return { ...state, name: action.name };

    default:
      return state;
  }
};

type ActionType = LoginACType | AddNameACType;

export default LoginReducer;

export const UpdateIsAuthAC = (isAuth: boolean): LoginACType => ({
  type: "UPDATE_ISAUTH",
  isAuth,
});

export const AddNameAC = (name: string): AddNameACType => ({
  type: "ADD_NEW_NAME",
  name,
});
