import React from 'react';
import Header from './Header/Header.jsx';
import About from './About/About.jsx';
import LogForm from './LogForm/LogForm.jsx';
import { BrowserRouter as Router} from 'react-router-dom';

const App =()=>(
   <Router>
    <div className="container">
      <Header/>
    </div>
    <About/>
  {/*  <div>
       <LogForm isRegisterForm={false}/>
   </div>*/}
   </Router>
    )

export default App;
