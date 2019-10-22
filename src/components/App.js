import React from 'react';
import Header from './Header/Header.jsx';
import LogForm from './LogForm/LogForm.jsx';
import { BrowserRouter as Router} from 'react-router-dom';

const App =()=>(
   <Router>
    <div className="container">
      <Header/>
    </div>
    <div>
        <LogForm/>
    </div>
   </Router>
    )

export default App;
