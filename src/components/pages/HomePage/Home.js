import React, { useEffect } from 'react'
import HeroSection from '../../HeroSection'
//pulling data properties 
import { homeObjOne, homeObjTwo, homeObjThree } from './Data'
//import Pricing from '../../Pricing';
import Video from '../Dashboard/Video'


function Home() {

    useEffect(() => {
        window.scrollTo(0,0)
    });

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