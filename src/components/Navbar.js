import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdFingerprint } from 'react-icons/md';
import { AiTwotoneBank } from 'react-icons/ai';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from './Button';
import './Navbar.css';
//contact API - can pass in properties / in this case changing the icon colors
import { IconContext } from 'react-icons/lib'

function Navbar() {
// showcases the hamburger bar menu
    const [click, setClick] = useState(false)

// shows buttons
    const [button, setButton] = useState(true);

//displays the hamburger contents on click - toggles to X
    const handleClick = () => setClick(!click)

// closes the mobile menu when clicked
    const closeMobileMenu = () => setClick(false)

// function to show the menu depending which screen size you are on
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

// renders one time 
    useEffect(() => {
        showButton();
    }, []);

// calls showButton function 
    window.addEventListener('resize', showButton);


// navbar-container container CONTAINS --- NAV BAR ICON / LAVISH / fingerprint / hamburger and X
//nav-menu active CONTAINS --- Menu
// { click ? } --- true

    return (
        <>
        <IconContext.Provider value={{ color: '#fff'}}>  
            <div className='navbar'>

                <div className='navbar-container container'>
                    <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>

                        <AiTwotoneBank className= 'navbar-icon' />
                        Merit Bank

                    </Link>
                    <div className='menu-icon' onClick={ handleClick } >
                        { click ? <FaTimes /> : <FaBars /> } 
                    </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    
                    <li className="nav-item"> 
                        <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                            HOME 
                        </Link>
                    </li>

                    <li className="nav-item"> 
                        <Link to='/services' className="nav-links" onClick={closeMobileMenu}>
                            SERVICES 
                        </Link>
                    </li>

                    <li className="nav-item"> 
                        <Link to='/products' className="nav-links" onClick={closeMobileMenu}>
                            PRODUCTS 
                        </Link>
                    </li>

                    <li className="nav-btn">
                        {button ? (
                            <Link to='/login' className="btn-link">
                                <Button buttonStyle='btn--outline'>
                                    LOGIN
                                </Button>
                            </Link>
                        ): (
                            <Link to='/login' className='btn-link' onClick={closeMobileMenu}>
                                <Button buttonStyle='btn--outline' buttonSize='btn--mobile'>
                                    LOGIN  
                                </Button>
                            </Link>
                        )
                    }
                    </li>

                </ul>

                </div>
            </div> 
            </IconContext.Provider>
        </>
    );
}

export default Navbar
