import React from 'react'
import { Link } from 'react-router-dom';
import { FaFire } from 'react-icons/fa'
import { Button } from './Button'
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { RiSafeLine } from 'react-icons/ri';
import { RiSafe2Line } from 'react-icons/ri';
import { IconContext } from 'react-icons/lib';
import './Pricing.css';


function Pricing() {
    return (
        <IconContext.Provider value={{ color: '#fff', size: 64 }}>
            <div>
                <div className="pricing__section">
                    <div className="pricing__wrapper">
                        <h1 className="pricing__heading">
                            Your Accounts: 
                    </h1>
                        <div className="pricing__container">



                            <Link to="/login" className='pricing__container-card'>
                                <div className="pricing__container-cardInfo">
                                    <div className="icon">
                                        <RiSafe2Line />
                                    </div>
                                    <h3>Savings Account</h3>
                                    <h4>$100,000</h4>
                                    <p> Available Funds </p>

                                    <Button buttonSize='btn--small' buttonColor='primary'>
                                        More Details
                                </Button>
                                </div>
                            </Link>




                            <Link to="/login" className='pricing__container-card'>
                                <div className="pricing__container-cardInfo">
                                    <div className="icon">
                                        <RiSafe2Line />
                                    </div>
                                    <h3>Checking Account</h3>
                                    <h4>$300,000</h4>
                                    <p>Available Funds</p>

                                    <Button buttonSize='btn--small' buttonColor='green'>
                                        More Details
                                </Button>
                                </div>
                            </Link>



                            <Link to="/login" className='pricing__container-card'>
                                <div className="pricing__container-cardInfo">
                                    <div className="icon">
                                        <RiSafeLine />
                                    </div>
                                    <h3>CD Account</h3>
                                    <h4>$10,000</h4>
                                    <p>Locked Funds</p>

                                    <Button buttonSize='btn--small' buttonColor='primary'>
                                        More Details
                                </Button>
                                </div>
                            </Link>





                            <Link to="/login" className='pricing__container-card'>
                                <div className="pricing__container-cardInfo">
                                    <div className="icon">
                                        <RiSafeLine />
                                    </div>
                                    <h3>IRA Account</h3>
                                    <h4>$4,000</h4>
                                    <p>Locked Funds</p>

                                    <Button buttonSize='btn--medium' buttonColor='primary'>
                                        More Details
                                </Button>
                                </div>
                            </Link>





                        </div>
                    </div>
                </div>
            </div>
        </IconContext.Provider>
    );
}

export default Pricing
