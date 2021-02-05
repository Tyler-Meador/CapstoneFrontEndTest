//import React from 'react'
import HeroSection from '../../HeroSection'
//pulling data properties 
//import { homeObjOne } from './Data'
import Pricing from '../../Pricing';
import DashboardElements from '../../pages/Dashboard/DashboardElements';
//import DashboardTop from '../../pages/Dashboard/DashboardTop';
import './Dashboard.css';
//import Video from '.././public/images/video.mp4'
//import { HeroContainer, HeroBg, VideoBg } from '../Dashboard/DashboardElements'


//import video from '../videos/video.mp4';

import { Link } from "react-router-dom";
import Video from '../Dashboard/Video';
import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import DashboardTop from './DashboardTop';
import DashboardAccounts from './DashboardAccounts';
import DashboardBottom from './DashboardBottom';
import TransferMoney from './TransferMoney';

//*******THIS DIDPLAYS THE DASHBOARD COMPONENTS*******


function Dashboard() {
    return (
        <>




            <DashboardElements />

            <DashboardTop />

            <DashboardAccounts />



            
        </>
    )
}

export default Dashboard;
