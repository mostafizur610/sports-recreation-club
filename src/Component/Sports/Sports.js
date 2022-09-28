import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import './Sports.css'

const Sports = () => {
    const [activities, setActivity] = useState([]);

    useEffect(() => {
        fetch('sports-recreation.json')
            .then(res => res.json())
            .then(data => setActivity(data))
    }, [])

    return (
        <div className='sports-container'>
            <div className='activities-container'>
                {
                    activities.map(activity => <Activity key={activity.id}
                        activity={activity}
                    ></Activity>)
                }
            </div>


            <div className='profile-container'>
                <h2>profile activity</h2>
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