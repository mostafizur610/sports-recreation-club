import React from 'react';
import logo from '../../images/logo.png';
import './Heading.css'


const Heading = () => {
    return (
        <div>
            <div className='heading'>
                <img src={logo} alt="" />
                <h1>Sports & Recreation Club</h1>
            </div>
            <div className='header'>
                <h3>Select the Sports</h3>
            </div>
        </div>
    );
};

export default Heading;