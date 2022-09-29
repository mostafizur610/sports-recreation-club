import React from 'react';
import './Activity.css'

const Activity = (props) => {
    const { activity, handleAddToProfile } = props;
    // const { handleAddToProfile } = props;
    // console.log(props.activity);
    const { image, activity_name, description, age, time } = activity;
    // console.log(props);

    return (
        <div className='activity'>
            <img src={image} alt="" />
            <p className='activity-name'>{activity_name}</p>
            <div className='activity-info'>
                <p>{description}</p>
                <h4>For Age: {age} year</h4>
                <h4>Time Required: {time} hr</h4>
            </div>

            <button onClick={() => handleAddToProfile(activity)} className='btn-list'>
                <p>Add to List</p>
            </button>
        </div>
    );
};

export default Activity;