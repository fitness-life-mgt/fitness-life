import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import  Header from './components/Header';
import Card1 from './components/card1';

function App() {
  return (
   <>
    <Navbar/>  
    <Header/> 
    <Card1/>   
    </>
    );
}

export default App;
