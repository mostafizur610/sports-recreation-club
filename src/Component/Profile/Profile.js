import React, { useEffect, useState } from 'react';
import profileImg from '../../images/m.jpg'
import './Profile.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Profile = (props) => {
    const [breakTime, setBreakTime] = useState('0 min');

    const [button1, setButton1] = useState(true);
    const [button2, setButton2] = useState(true);
    const [button3, setButton3] = useState(true);
    const [button4, setButton4] = useState(true);
    const [button5, setButton5] = useState(true);

    useEffect(() => {
        const time = localStorage.getItem('breakTime');
        if (time) setBreakTime(JSON.parse(time));
        checkBreakButton((JSON.parse(time)))
    }, []);

    const { profile } = props;
    let total = 0;
    for (const activity of profile) {
        total = total + parseFloat(activity.time);
    }
    // toast
    const showToast = () => {
        toast.dark('Wow!!😱 Activity Completed', {
            position: "top-center"
        });
    }
    // local storage section
    const breakButton = (evt) => {
        localStorage.removeItem('breakTime');
        const time = evt.target.textContent;
        localStorage.setItem('breakTime', JSON.stringify(time));
        setBreakTime(time);
        checkBreakButton(evt.target.textContent);
    }
    // break time button section
    const checkBreakButton = (text) => {
        if (text === '15 min') {
            setButton1(false);
            setButton2(true);
            setButton3(true);
            setButton4(true);
            setButton5(true);
        } else if (text === '20 min') {
            setButton1(true);
            setButton2(false);
            setButton3(true);
            setButton4(true);
            setButton5(true);
        } else if (text === '30 min') {
            setButton1(true);
            setButton2(true);
            setButton3(false);
            setButton4(true);
            setButton5(true);
        } else if (text === '40 min') {
            setButton1(true);
            setButton2(true);
            setButton3(true);
            setButton4(false);
            setButton5(true);
        } else if (text === '50 min') {
            setButton1(true);
            setButton2(true);
            setButton3(true);
            setButton4(true);
            setButton5(false);
        }
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
                <button className={button1 ? 'btn-break' : 'btn-break-click'} onClick={breakButton}>15 min</button>
                <button className={button2 ? 'btn-break' : 'btn-break-click'} onClick={breakButton}>20 min</button>
                <button className={button3 ? 'btn-break' : 'btn-break-click'} onClick={breakButton}>30 min</button>
                <button className={button4 ? 'btn-break' : 'btn-break-click'} onClick={breakButton}>40 min</button>
                <button className={button5 ? 'btn-break' : 'btn-break-click'} onClick={breakButton}>50 min</button>
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