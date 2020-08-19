import {connect} from 'react-redux';
import LogForm from '../components/LogForm/LogForm.jsx';
import {logIn, register} from '../actions';


const mapStateToProps = (state) => ({
    username: state.username,
    psw: state.psw,
    email: state.email,
    isLogged: state.isLogged,
    isRegisterForm: state.loginForm.isRegisterForm
})


const mapDispatchToProps = (dispatch) => ({
        handleLogInClick(username, psw, email) {
            if (!username.value.trim() && !psw.value.trim()) {
                return
            }
            if (email === undefined) {
            dispatch(logIn(username, psw))
            }
            else
            {
              dispatch(register(username, psw, email))
              email.value = '';
            }
            ;
            username.value = '';
            psw.value = '';

        }

    }
)


export default connect(mapStateToProps, mapDispatchToProps)(LogForm);
