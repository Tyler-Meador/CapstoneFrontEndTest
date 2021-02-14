import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdFingerprint } from 'react-icons/md';
import { AiTwotoneBank } from 'react-icons/ai';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from './Button';
import './Navbar.css';
import { connect } from 'react-redux'
import { logout } from '../redux/Login/LoginActions'
import { userLogout } from '../redux/User/UserActions'
//contact API - can pass in properties / in this case changing the icon colors
import { IconContext } from 'react-icons/lib'

function Navbar({loginStatus, test, userLoaded, logout, userLogout}) {
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

                        <img src='images/Flogo_NavBar.png' className="img-top" />

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

                    <li className="nav-item"> 
                        {userLoaded ? (
                            <Link to='/dashboard' className="nav-links" onClick={closeMobileMenu}>
                                DASHBOARD 
                            </Link>
                        ):( null )

                        }

                    </li>

                    <li className="nav-btn">
                        {button ? (
                            <Link to={test} className="btn-link">
                                <Button buttonStyle='btn--outline' onClick={loginStatus === 'LOGOUT' ? {logout} : null}>
                                    {loginStatus}
                                </Button>
                            </Link>
                        ): (
                            <Link to={test} className='btn-link' onClick={closeMobileMenu}>
                                <Button buttonStyle='btn--outline' buttonSize='btn--mobile'>
                                    
                                    {loginStatus}
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
const mapStateToProps = state => {
    return {
        test: state.Login.test,
        loginStatus: state.Login.loginStatus,
        userLoaded: state.User.userLoaded
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout()),
        userLogout: () => dispatch(userLogout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
