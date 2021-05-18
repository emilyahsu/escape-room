import {
    Link,
  } from 'react-router-dom';
import React from 'react';
import './main.css';
  
function Welcome (){
    return (
    <Link to="/name" style={{ textDecoration: 'none', height: '100vh', width: '100vh' }}>
        <div className='welcome'>
            <h1>Welcome to BAADS Scheduler</h1>
            <p className="opening">BAADS sails every weekend year-round, weather permitting. We’re here to help you schedule a time with a sighted volunteer guide who can help you navigate the pier.</p>
            <p style={{textDecoration: 'underline'}}>Click anywhere or press Enter to continue</p>
        </div>
    </Link> 
    );
}
  
export default Welcome;