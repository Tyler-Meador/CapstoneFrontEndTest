//import React from 'react';
import './Dashboard.css';
import { Link } from "react-router-dom";
//import Video from '../public/videos/video.mp4';
import React, { Component } from 'react'
import ReactPlayer from 'react-player'

const DashboardElements = () => {
    return (



        <div className='HeroContainerDash'>
            <video className='VideoBg' loop autoPlay>
                <source src='videos/video.mp4' type="video/mp4" />
            </video>

            <div className='HeroContent'>

                <h1 className='HeroH1'>
                    Merit Bank Dashboard
                </h1>
                <h2 className='HeroH2'>
                    WELCOME MICHELLE
                </h2>
            </div>
        </div>


    );
};

export default DashboardElements;





