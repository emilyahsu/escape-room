import React from 'react';
import './main.css';
import BottomNav from './BottomNav';
import {
    Link,
  } from 'react-router-dom';
  
class Program extends React.Component {

    render() {
        return (
                <div className='welcome'>
                    <h1>Choose a Program:</h1>
                    <div className='narrowBody'>
                    <p >Use the up/down arrow keys to toggle selection and press Enter to confirm</p>
                    <Link to='/times/saturday'>
                        <button>
                            Saturday Small Boat Sailing
                        </button>
                    </Link>
                    <Link to='/times/sunday'>
                        <button>
                            Sunday Keelboat Sailing
                        </button>
                    </Link>
                    <BottomNav next='program' back='email' />
                    </div>
                </div>
        );
    }   
}
export default Program;