import {
    Link,
  } from 'react-router-dom';
import React, {useEffect} from 'react';
import './main.css';
  
const Welcome = () => {
    return (
    <Link to="/inner" style={{ textDecoration: 'none', height: '100vh', width: '100vh' }}>
        <div className='welcome'>
            <p className="opening">You’ve been stranded on an planet after an engine malfunction, and crash landed in an alien civilization.</p> 
            <p>Your spacesuit only has 45 minutes of oxygen left.</p>
            <p style={{textDecoration: 'underline'}}>Click anywhere to begin</p>
        </div>
    </Link> 
    );
}
  
export default Welcome;