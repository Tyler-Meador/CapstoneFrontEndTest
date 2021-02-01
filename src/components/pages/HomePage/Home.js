import React from 'react'
import HeroSection from '../../HeroSection'
//pulling data properties 
import { homeObjOne, homeObjTwo, homeObjThree } from './Data'
//import Pricing from '../../Pricing';



function Home() {

    return (
        <>
            <HeroSection { ...homeObjOne } />
            <HeroSection { ...homeObjTwo} />
            <HeroSection { ...homeObjThree} />
            


        </>
    )
}

export default Home;


// <Pricing />
// <HeroSection { ...homeObjFour } />