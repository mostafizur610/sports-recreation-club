import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import './Sports.css'
import profile from '../../images/m.jpg'

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

                <div className='profile'>
                    <img src={profile} alt="" />
                    <div>
                        <h4>Mostafizur Rahman</h4>
                        <p><small>Mirpur, Dhaka</small></p>
                    </div>
                </div>
                <div className='profile-details'>
                    <div>
                        <div>64kg</div>
                        <div>Weight</div>
                    </div>
                    <div>
                        <div>5.5inc</div>
                        <div>Height</div>
                    </div>
                    <div>
                        <div>26</div>
                        <div>Age</div>
                    </div>
                </div>
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