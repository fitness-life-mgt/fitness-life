import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Workouts from './Workouts';
import Login from './Login';
import Contact from './Contact';
import Signup from './Signup';
import profile from './profile';
import Footer from './Footer';
import Shop from './Shop';
import Cart from './Cart';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>  
    <Navbar/>  
    <Switch>
   
    <Route path='/' exact component={Home} />
    <Route path='/About' exact component={About} />
    <Route path='/Workouts' exact component={Workouts} />
    <Route path='/Shop' exact component={Shop} />
    <Route path='/Login' exact component={Login} />
    <Route path='/Contact' exact component={Contact} /> 
    <Route path='/Signup' exact component={Signup} />   
    <Route path='/profile' exact component={profile} />  
    <Route path='/Cart' exact component={Cart} /> 
    </Switch>    
    <Footer/> 
    </Router>  
    );
}

export default App;
