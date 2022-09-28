import React from 'react';
import logo from '../../images/slogo.png';
import './Heading.css'


const Heading = () => {
    return (
        <div className='heading'>
            <img src={logo} alt="" />
            <h1>Sports & Recreation Club</h1>
        </div>
    );
};

export default Heading;