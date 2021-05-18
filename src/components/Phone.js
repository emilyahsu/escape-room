import React from 'react';
import './main.css';
import BottomNav from './BottomNav';
  
class Phone extends React.Component {
    
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
                    <h1 className='question' style={{marginBottom: 0}}>What is your phone number?</h1>
                    <p>This is so that our volunteers can contact you in the case of an emergency.</p>
                    <form>
                        <input type='text' value={this.state.value} placeholder='Type your phone number here' onChange={this.handleChange} />
                    </form>
                    <BottomNav next='program' back='email' />
                </div>
            </div>
        );
    }   
}
export default Phone;