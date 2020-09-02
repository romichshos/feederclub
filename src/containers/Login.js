import {connect} from 'react-redux';
import LogForm from '../components/LogForm/LogForm.jsx';
import { logOut, registerDB, loginGoogle} from '../actions';


const mapStateToProps = (state) => ({
    imgUrl: state.loginForm.imgUrl,
    isLoginOut: state.loginForm.isLoginOut,
    user: state.loginForm.user,
    isLogged: state.loginForm.isLogged,
    isRegisterForm: state.loginForm.isRegisterForm
})


const mapDispatchToProps = (dispatch) => ({
        handleLogInClick(user, email, imgUrl) {
            dispatch(loginGoogle(user, email, imgUrl));
           },
        handleLogOutClick() {
            dispatch(logOut())
           }
    }
)


export default connect(mapStateToProps, mapDispatchToProps)(LogForm);
