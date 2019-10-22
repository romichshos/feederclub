import React from 'react';
import Header from './Header/Header.jsx';
import RegForm from './RegForm/RegForm.jsx';
import { BrowserRouter as Router} from 'react-router-dom';

const App =()=>(
   <Router>
    <div className="container">
      <Header/>
    </div>
    <div>
        <RegForm/>
    </div>
   </Router>
    )

export default App;
