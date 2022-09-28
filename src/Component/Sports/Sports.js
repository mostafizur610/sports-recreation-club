import React, { useState, useEffect } from 'react';

const Sports = () => {
    const [sports, setSports] = useState({
        count: 0,
        rows: []
    });
    useEffect(() => {
        fetch('sports-recreation.json')
            .then(res => res.json())
            .then(data => setSports(data))
    }, []);
    return (
        sports.rows.map(sport =>
            <div className='heading' key={sport.id}>
                <img src={sport.image} alt="" />
            </div>
        )
    );
};

export default Sports;