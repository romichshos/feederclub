import {connect} from 'react-redux';
import Menu from '../components/NavBar/Navbar.jsx';
import {logOut, loginClick, registerClick} from '../actions';

const mapStateToProps = (state) => ({
      username: state.loginForm.username/*,
      isRegisterForm: state.loginForm.isRegisterForm*/
})

const mapDispatchToProps = (dispatch) => ({
    onClickLogOut: () => dispatch(logOut()),
    onClickLogIn: () => dispatch(loginClick()),
    onClickRegister: ()=> dispatch(registerClick())
}
)

export default connect(mapStateToProps, mapDispatchToProps)(Menu);