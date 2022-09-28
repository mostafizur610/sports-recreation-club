import React from 'react';
import './Activity.css'

const Activity = (props) => {
    // console.log(props.activity);
    const { image, activity_name, description, age, time } = props.activity;
    return (
        <div className='activity'>
            <img src={image} alt="" />
            <p className='activity-name'>{activity_name}</p>
        </div>
    );
};

export default Activity;