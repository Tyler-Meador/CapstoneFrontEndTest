
import DashboardElements from '../../pages/Dashboard/DashboardElements';
import './Dashboard.css';
import React, { Component, useLayoutEffect } from 'react'
import DashboardAccounts from './DashboardAccounts';
import Sidebar from '../../Sidebar/Sidebar';

//*******THIS DISPLAYS THE DASHBOARD COMPONENTS*******



function Dashboard() {

    useLayoutEffect(() => {
        window.scrollTo(0,0)
    });

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

