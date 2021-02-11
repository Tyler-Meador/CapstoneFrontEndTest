import React from 'react'
import '../Checking/CheckingDetails.css';
import { Link } from 'react-router-dom';
import Sidebar from '../../Sidebar/Sidebar';

function Profile() {
    return (
        <>
            <div className='HeroContainerDash'>
                <video className='VideoBg' loop autoPlay>
                    <source src='videos/video.mp4' type="video/mp4" />
                </video>

                <div className='HeroContent'>

                    <h1 className='HeroH1'>
                        YOUR ACCOUNT
                </h1>

                </div>
            </div>
            


            < Sidebar />


        </>
    )
}

export default Profile
