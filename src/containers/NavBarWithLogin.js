import {connect} from 'react-redux';
import Menu from '../components/NavBar/Navbar.jsx';
import {logOut} from '../actions';

const mapStateToProps = (state) => ({
      username: state.loginForm.username
})

const mapDispatchToProps = (dispatch) => ({
    onClickLogOut: () => dispatch(logOut())
}
)

export default connect(mapStateToProps, mapDispatchToProps)(Menu);