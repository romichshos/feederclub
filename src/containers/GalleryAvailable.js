import {connect} from 'react-redux';
import Gallery from '../components/Gallery/Gallery.jsx';


const mapStateToProps = (state) => ({
    user: state.loginForm.user
})

export default connect(mapStateToProps)(Gallery);