import React, { useState } from 'react';
import './main.css';
import BottomNav from './BottomNav';
  
class Name extends React.Component {
    
    constructor(props) {
        super(props); // Must run the constructor of React.Component first
    
        // Components have a special property named "state" that holds state.
        // We can initialize it here.
        // We read the example model data into the state variable 'name'
        this.state = {
          value: '',
        }

        this.handleChange = this.handleChange.bind(this);

    };

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        return (
            <div className='name'>
                <div>
                    <h1 className='question'>What is your full name?</h1>
                    <form>
                        <input type='text' value={this.state.value} placeholder='Type your name here' onChange={this.handleChange} />
                    </form>
                    <BottomNav next='email' back='' />
                </div>
            </div>
        );
    }   
}
export default Name;