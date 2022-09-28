import React from 'react';
import './Sports.css'

const Sports = () => {
    return (
        <div className='sports-container'>
            <div className='activities-container'>
                <h2>sports</h2>
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