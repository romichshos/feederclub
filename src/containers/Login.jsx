import {connect} from 'react-redux';
import LogForm from '../components/LogForm/LogForm.jsx';

/*
const LoginForm = ({dispatch})=>{

}
*/

/*const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(han(ownProps.filter))
})*/

export default connect()(LogForm);