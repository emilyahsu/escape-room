import React from 'react';
import './main.css';
import BottomNav from './BottomNav';
  
class Confirmation extends React.Component {

    render() {
        return (
            <div className='name'>
                <div>
                    <h1 className='question' style={{ marginBottom: 0 }}>Thank you for using BAADS Scheduler!</h1>
                    <p>A confirmation letter has been sent your email.</p>

                    <div className='confirmation'>
                        <div>
                            <h2>Program:</h2>
                            <p>Saturday Small Boat Sailing</p>

                            <h2>Date:</h2>
                            <p>Saturday, May 29</p>

                            <h2>Time:</h2>
                            <p>9:15 AM</p>

                            <h2>Meeting Location:</h2>
                            <p>The Embarcadero & Brennan St.</p>
                        </div>
                        <div className="volunteer">
                            <h2>Your volunteer is:</h2>
                            <p>Amy Fields</p>

                            <h2>You can reach her at:</h2>
                            <p>760-583-9096</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }   
}
export default Confirmation;