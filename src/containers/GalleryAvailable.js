import {connect} from 'react-redux';
import Gallery from '../components/Gallery/Gallery.jsx';


const mapStateToProps = (state) => ({
    user: state.loginForm.user,
    dataImg: state.gallery.dataImg
})

export default connect(mapStateToProps)(Gallery);