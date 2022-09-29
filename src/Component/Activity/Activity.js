import React from 'react';
import './Activity.css'

const Activity = (props) => {
    const { activity, handleAddToProfile } = props;
    // console.log('activity', activity);
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

            <button disabled={activity?.add} onClick={() => handleAddToProfile(activity)} className={activity.add ? 'btn-list disable' : 'btn-list enable'}>
                <p>{activity.add ? 'Added' : 'Add to List'}</p>
            </button>
        </div>
    );
};

export default Activity;