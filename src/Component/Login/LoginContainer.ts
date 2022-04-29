import { connect } from "react-redux";

import { AppStateType } from "../../Redux/Redux_Store";
import { Login } from "./Login";
import { AddNameAC, UpdateIsAuthAC } from "../../Redux/LoginReducer";

let mapStateToProps = (state: AppStateType) => {
  return {
    isAuth: state.LoginPage.isAuth,
  };
};
export default connect(mapStateToProps, { AddNameAC, UpdateIsAuthAC })(Login);
