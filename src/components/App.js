import React from 'react';
import Header from './Header/Header.jsx';
import About from './About/About.jsx';
import Contacts from './Contacts/Contacts.jsx';
import LogForm from '../containers/Login';
import {BrowserRouter as Router} from 'react-router-dom';



const App = () => (
    <Router>
        <div className="container">
            <Header/>
            <About/>
            <LogForm/>
            <Contacts/>
        </div>
    </Router>
)

export default App;
