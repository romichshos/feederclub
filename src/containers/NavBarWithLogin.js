import {connect} from 'react-redux';
import Menu from '../components/NavBar/Navbar.jsx';

const mapStateToProps = (state) => ({
      username: state.loginForm.username
})

export default connect(mapStateToProps)(Menu);