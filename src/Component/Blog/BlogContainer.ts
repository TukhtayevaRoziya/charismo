import { connect } from "react-redux";

import { AppStateType } from "../../Redux/Redux_Store";
import BLog from "./BLog";

let mapStateToProps = (state: AppStateType) => {
  return {
    maps: state.BlogPage.maps,
  };
};

export default connect(mapStateToProps)(BLog);
