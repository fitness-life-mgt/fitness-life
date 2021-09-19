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
import SportsWears from './SportsWears';
import Cart from './Cart';
import Suppliments from './Suppliments';
import Equipments from './Equipments';
import updateprofile from './updateprofile';


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>  
    <Navbar/>  
    <Switch>
   
    <Route path='/' exact component={Home} />
    <Route path='/About' exact component={About} />
    <Route path='/Workouts' exact component={Workouts} />
    <Route path='/SportsWears' exact component={SportsWears} />
    <Route path='/Login' exact component={Login} />
    <Route path='/Contact' exact component={Contact} /> 
    <Route path='/Signup' exact component={Signup} />   
    <Route path='/profile' exact component={profile} />  
    <Route path='/Cart' exact component={Cart} /> 
    <Route path='/Suppliments' exact component={Suppliments} /> 
    <Route path='/Equipments' exact component={Equipments} /> 
    <Route path='/updateprofile' exact component={updateprofile} /> 
   

    </Switch>    
    <Footer/> 
    </Router>  
    );
}

export default App;
