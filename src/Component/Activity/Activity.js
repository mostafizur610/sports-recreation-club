import React from 'react';
import './Activity.css'

const Activity = (props) => {
    // destructure and value pass
    const { activity, handleAddToProfile } = props;
    const { image, activity_name, description, age, time } = activity;

    return (
        <div className='activity'>
            <img src={image} alt="" />
            <p className='activity-name'>{activity_name}</p>
            <div className='activity-info'>
                <p>{description}</p>
                <h4>For Age: {age} year</h4>
                <h4>Time Required: {time} hr</h4>
            </div>

            {/* Add Button */}
            <button disabled={activity?.add} onClick={() => handleAddToProfile(activity)} className={activity.add ? 'btn-list disable' : 'btn-list enable'}>
                <p>{activity.add ? 'Added' : 'Add to List'}</p>
            </button>
        </div>
    );
};

export default Activity;