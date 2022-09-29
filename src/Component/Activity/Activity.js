import React from 'react';
import './Activity.css'

const Activity = (props) => {
    // console.log(props.activity);
    const { image, activity_name, description, age, time } = props.activity;
    return (
        <div className='activity'>
            <img src={image} alt="" />
            <p className='activity-name'>{activity_name}</p>
            <div className='activity-info'>
                <p>{description}</p>
                <h4>For Age: {age}</h4>
                <h4>Time Required: {time}</h4>
            </div>

            <button className='btn-list'>
                <p>Add to List</p>
            </button>
        </div>
    );
};

export default Activity;