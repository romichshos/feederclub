import React from 'react';
import Header from './Header/Header.jsx';
import About from './About/About.jsx';
import MyGallery from '../containers/GalleryAvailable';
import Contacts from './Contacts/Contacts.jsx';
import LogForm from '../containers/Login';





const App = () => (
        <div className="container">
            <Header/>
            <About/>
            <LogForm/>
            <MyGallery/>
            <Contacts/>
        </div>
)

export default App;
