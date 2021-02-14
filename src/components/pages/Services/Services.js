import React from 'react';
import HeroSection from '../../HeroSection'
//pulling data properties 
import { homeObjOne, homeObjTwo, homeObjThree } from './Data'

function Services() {
    return (
        <>
            
            <HeroSection { ...homeObjThree} />
            <HeroSection { ...homeObjTwo} />


        </>
    )
}

export default Services;