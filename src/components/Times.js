import React from 'react';
import './main.css';
import BottomNav from './BottomNav';
  
class Times extends React.Component {
    
    constructor(props) {
        super(props); // Must run the constructor of React.Component first
    
        // Components have a special property named "state" that holds state.
        // We can initialize it here.
        // We read the example model data into the state variable 'name'
        this.state = {
          date: 'May 29',
          time: '9:00 AM',
        }

        this.handleClick = this.handleClick.bind(this);

    };
 

    handleClick(event) {
        
        this.setState({ date: event.target.parentElement.firstElementChild.innerHTML });
        this.setState({ time: event.target.value });
    }

    render() {

        let timeList = [];
        let times = ["9:00 AM", "9:15 AM", "9:30AM"];
        for (let i = 0; i < times.length; i++) {
            timeList.push(
                <button value={times[i]} onClick={this.handleClick}>{times[i]}</button>
            );
        }

        let timeTable = [];
        let dates = ["May 29", "June 5", "June 12"];

        for (let i = 0; i < dates.length; i++) {
            timeTable.push(<React.Fragment key={i}>
                <div className='timeList' >
                    <h1 style={{ fontSize: 40 }}>{dates[i]}</h1>
                    {timeList}
                </div>
            </React.Fragment>
            )
        }

        return (
            <div className='welcome'>
                    <h1 className='question'>{ this.props.match.params.day == 'saturday' ? 'Saturday Smallboat Sailing': 'Sunday Keelboat Sailing'}</h1>
                    <p className='narrowBody'>Use the left/right arrow keys select a date. Use the up/down arrow keys to select a time.</p>
                    <div className="timetable">
                        {timeTable}
                    </div>
                    <p>You have selected <b>{ this.props.match.params.day == 'saturday' ? 'Saturday': 'Sunday'}, {this.state.date}</b> at <b>{this.state.time}</b>.</p>
                    <BottomNav next='location' back='program' />
            </div>
        );
    }   
}
export default Times;