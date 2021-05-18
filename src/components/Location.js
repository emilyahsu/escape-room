import React from 'react';
import './main.css';
import BottomNav from './BottomNav';
import {
    Link,
  } from 'react-router-dom';
  
class Location extends React.Component {

    render() {
        return (
                <div className='welcome'>
                    <h1>Choose a Meetup Location:</h1>
                    <div className='narrowBody'>
                    <p >Use the up/down arrow keys to toggle selection and press Enter to confirm</p>
                    <button>
                        The Embarcadero & Brannan St.
                    </button>
                    <button>
                        The Embarcadero & Townsend St.
                    </button>
                    <button>
                        Frankie’s Java House
                    </button>
                    <BottomNav next='confirmation' back='program' />
                    </div>
                </div>
        );
    }   
}
export default Location;