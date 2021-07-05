import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Workouts from './Workouts';
import Login from './Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>  
    <Navbar/>  
    <Switch>
    <Route path='/' exact component={Home} />
    <Route path='/About' exact component={About} />
    <Route path='/Workouts' exact component={Workouts} />
    <Route path='/Login' exact component={Login} />
    
    </Switch>    
    </Router>  
    );
}

export default App;
