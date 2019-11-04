import {connect} from 'react-redux';
import LogForm from '../components/LogForm/LogForm.jsx';
import {logIn} from '../actions';


const mapStateToProps = (state) => ({
    username: state.username,
    psw: state.psw,
    email: state.email,
    isLogged: state.isLogged
})


const mapDispatchToProps = (dispatch) => ({
        handleLogInClick(username, psw, email) {
            if (!username.value.trim() && !psw.value.trim() && !email.value.trim()) {
                return
            }
            dispatch(logIn(username, psw, email));
            username.value = '';
            psw.value = '';
            email.value = '';
        }
    }
)


export default connect(mapStateToProps, mapDispatchToProps)(LogForm);
