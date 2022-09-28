import React from 'react';
import logo from '../../images/slogo.png';
import './Heading.css'


const Heading = () => {
    return (
        <div className='name'>
            <img src={logo} alt="" />
            <h1 className='name'>Sports & Recreation Club</h1>
        </div>
    );
};

export default Heading;