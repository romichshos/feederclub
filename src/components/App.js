import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import Header from './Header/Header';
import Menu from './NavBar/Menu';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router';
import Contacts from "./Contacts/Contacts";
import MainPage from "./MainPage/MainPage";
const App =()=>(
   <Router>
    <div className="app-wrapper">
      <Header/>
      <Menu/>
    </div>
    <div>
      <Route exact path='/' component={MainPage}/>
      <Route path='/Contacts/Contacts' component={Contacts}/>
    </div>
   </Router>
    )

export default App;
