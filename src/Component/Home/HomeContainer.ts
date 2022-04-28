import { connect } from "react-redux"

import { AppStateType } from '../../Redux/Redux_Store'
import Home from './Home'
import { UpdateIsAuthAC } from './../../Redux/LoginReducer'

let mapStateToProps = (state:AppStateType) => {
  return {
    isAuth: state.LoginPage.isAuth,
    name: state.LoginPage.name
  }
}

export default  connect(mapStateToProps, { UpdateIsAuthAC })(Home)