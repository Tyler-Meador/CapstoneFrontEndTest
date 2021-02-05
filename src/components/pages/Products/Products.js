import React from 'react'
import HeroSection from '../../HeroSection'
//pulling data properties 
import { homeObjOne, homeObjTwo  } from './Data'
//import Pricing from '../../Pricing';

function Products() {
    return (
        <>
            <HeroSection { ...homeObjTwo} />
            <HeroSection { ...homeObjOne} />
        </>
    )
}

export default Products;