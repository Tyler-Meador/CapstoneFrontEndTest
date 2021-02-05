import React from 'react'
import HeroSection from '../../HeroSection'
import DashboardElements from '../Dashboard/DashboardElements'
//pulling data properties 
import { homeObjOne, homeObjTwo, homeObjThree } from './Data'
//import Pricing from '../../Pricing';
import Video from '../Dashboard/Video'


function Home() {

    return (
        <>

            <Video />
            <HeroSection { ...homeObjOne } />
            <HeroSection { ...homeObjTwo} />
            <HeroSection { ...homeObjThree} />
            


        </>
    )
}

export default Home;


// <Pricing />
// <HeroSection { ...homeObjFour } />