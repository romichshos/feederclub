import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import Header from './Header/Header';
import Menu from './NavBar/Menu';
import { BrowserRouter as Router,  } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import Contacts from "./Contacts/Contacts";
import MainPage from "./MainPage/MainPage";
import About from "./About/About";
import MyGallery from "./Galery/Galery";
const App =()=>(
   <Router>
    <div className="app-wrapper">
      <Header/>
      <Menu/>
    </div>
    <div>
        <Route path='/MainPage/MainPage' component={MainPage}/>
        <Route path='/Contacts/Contacts' component={Contacts}/>
        <Route path='/MyGallery/MyGallery' component={MyGallery}/>
        <Route path='/About/About' component={About}/>
    </div>
   </Router>
    )

export default App;
