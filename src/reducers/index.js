import { combineReducers } from 'redux'
import {login,logout} from "../actions";


export default combineReducers({
    login,
    logout
})