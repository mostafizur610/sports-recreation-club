import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import './Sports.css'
import Profile from '../Profile/Profile';

const Sports = () => {
    const [activities, setActivity] = useState([]);
    const [profile, setProfile] = useState([]);

    useEffect(() => {
        fetch('sports-recreation.json')
            .then(res => res.json())
            .then(data => setActivity(data))
    }, [])

    const handleAddToProfile = (activity) => {
        // console.log(activity);
        const newProfile = [...profile, activity];
        setProfile(newProfile);
    }

    return (
        <div className='sports-container'>
            <div className='activities-container'>
                {
                    activities.map(activity => <Activity key={activity.id}
                        activity={activity}
                        handleAddToProfile={handleAddToProfile}
                    ></Activity>)
                }

            </div>


            <div className='profile-container'>
                <Profile profile={profile}></Profile>
            </div>
        </div>
    );
};

export default Sports;




































// import React, { useState, useEffect } from 'react';

// const Sports = () => {
//     const [sports, setSports] = useState({
//         count: 0,
//         rows: []
//     });
//     useEffect(() => {
//         fetch('sports-recreation.json')
//             .then(res => res.json())
//             .then(data => setSports(data))
//     }, []);
//     return (
//         sports.rows.map(sport =>
//             <div className='heading' key={sport.id}>
//                 <img src={sport.image} alt="" />
//             </div>
//         )
//     );
// };

// export default Sports;