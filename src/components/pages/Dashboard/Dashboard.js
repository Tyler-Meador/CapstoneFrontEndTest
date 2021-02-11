//import React from 'react'
import HeroSection from '../../HeroSection'
import Pricing from '../../Pricing';
import DashboardElements from '../../pages/Dashboard/DashboardElements';
import './Dashboard.css';
import { Link } from "react-router-dom";
import Video from '../Dashboard/Video';
import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import DashboardTop from './DashboardTop';
import DashboardAccounts from './DashboardAccounts';
import DashboardBottom from './DashboardBottom';
import TransferMoney from './TransferMoney';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import Sidebar from '../../Sidebar/Sidebar';

//*******THIS DISPLAYS THE DASHBOARD COMPONENTS*******


function Dashboard() {
    return (
        <>

            <DashboardElements />
            <div className='SidebarDrop'>
                < Sidebar />
                <DashboardAccounts />
            </div>
        </>
    )
}

export default Dashboard;


//   <DashboardTop />

//import Video from '.././public/images/video.mp4'
//import { HeroContainer, HeroBg, VideoBg } from '../Dashboard/DashboardElements'
//import video from '../videos/video.mp4';
//import DashboardTop from '../../pages/Dashboard/DashboardTop';
//pulling data properties 
//import { homeObjOne } from './Data'

