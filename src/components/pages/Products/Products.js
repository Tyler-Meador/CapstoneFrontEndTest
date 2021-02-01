import React from 'react'
import HeroSection from '../../HeroSection'
//pulling data properties 
import { homeObjTwo } from './Data'
//import Pricing from '../../Pricing';

function Products() {
    return (
        <>
            <HeroSection { ...homeObjTwo} />
        </>
    )
}

export default Products;