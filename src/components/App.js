import React from 'react';
import logo from '../logo.svg';
import './App.css';
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
    <div className="container">
      <Header />
      <Menu />

    <div>
        <Route exact path='/' component={MainPage}/>
        <Route path='/Contacts' component={Contacts}/>
        <Route path='/MyGallery' component={MyGallery}/>
        <Route path='/About' component={About}/>
    </div>
    </div>
   </Router>
    )

export default App;
