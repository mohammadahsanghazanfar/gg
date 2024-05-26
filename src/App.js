
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/Signup';

function App() {
 

  return (
 <Router>

  <div> 
    <Routes>

        <Route exact path='/' element={<Home/>} />
    </Routes>

    <Routes>

<Route exact path='/login' element={<Login/>} />
</Routes>

<Routes>

<Route exact path='/createUser' element={<Signup/>} />
</Routes>
    </div>

 </Router>
  );
}

export default App;
