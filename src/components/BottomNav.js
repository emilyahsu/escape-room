import {
    Link,
  } from 'react-router-dom';
import { Icon, InlineIcon } from '@iconify/react';
import arrowForward from '@iconify/icons-akar-icons/arrow-forward';
import arrowBack from '@iconify/icons-akar-icons/arrow-back';
import React from 'react';
import './main.css';
  
class BottomNav extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='bottomNav'>
                <Link className='link linkBack' to={"/" + this.props.back}>
                    <Icon className='icon iconBack' icon={arrowBack} />
                    Press Ctrl+Enter to go back
                </Link>
                <Link className='link' to={"/" + this.props.next}>
                    Press Enter to continue
                    <Icon className='icon' icon={arrowForward} />
                </Link>
            </div>
        );
    }
}
  
export default BottomNav;