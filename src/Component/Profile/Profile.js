import React, { useEffect, useState } from 'react';
import profileImg from '../../images/m.jpg'
import './Profile.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Profile = (props) => {
    const [breakTime, setBreakTime] = useState('');
    useEffect(() => {
        const time = localStorage.getItem('breakTime');
        if (time) setBreakTime(JSON.parse(time));
    }, [breakTime])
    const { profile } = props;
    // console.log(profile);
    let total = 0;
    for (const activity of profile) {
        total = total + parseFloat(activity.time);
        // console.log(total);
    }

    const showToast = () => {
        toast.dark('Activity Completed!!', {
            position: "top-center"
        });
    }

    const breakButton = (evt) => {
        localStorage.removeItem('breakTime');
        const time = evt.target.textContent;
        localStorage.setItem('breakTime', JSON.stringify(time));
        setBreakTime(time);
    }

    return (
        <div className='right-container'>
            <div className='profile'>
                <img src={profileImg} alt="" />
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
            <h4>Add A Break</h4>
            <div className='button-section'>
                <button className='btn-break' onClick={breakButton}>15min</button>
                <button className='btn-break' onClick={breakButton}>20min</button>
                <button className='btn-break' onClick={breakButton}>30min</button>
                <button className='btn-break' onClick={breakButton}>40min</button>
                <button className='btn-break' onClick={breakButton}>50min</button>
            </div>
            <h4>Exercise Details</h4>
            <div className='total-exercise'><h5>Exercise time : {total} hr</h5></div>
            <div className='break-section'><h5>Break time : {breakTime}</h5></div>
            <button className='btn-activity'
                onClick={showToast}>Activity Completed</button>
            <ToastContainer />
        </div>
    );
};

export default Profile;