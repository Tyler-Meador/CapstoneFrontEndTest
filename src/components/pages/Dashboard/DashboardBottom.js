import React from 'react'
import { Link } from 'react-router-dom';
import { FaFire } from 'react-icons/fa'
import { Button } from '../../Button'
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { RiSafeLine } from 'react-icons/ri';
import { RiSafe2Line } from 'react-icons/ri';
import { IconContext } from 'react-icons/lib';
import './Dashboard.css';



function DashboardBottom() {
    return (










        
        <IconContext.Provider value={{ color: '#fff', size: 30 }}>
            <div>























                <div className="pricing__section">
                    <div className="pricing__wrapper">




                        <div className="pricing__container">



                            <Link to="/login" className='Transaction__container-card'>
                                
                                <div className="UseableFunds__container-cardInfo">
                                
                                    <h1>Transactions</h1>
                                </div>





                                <div className='Transfer_Money_Button'>
                                    <Button buttonSize='btn--tiny' buttonColor='blue'>
                                        arrrrow
                                </Button>
                                </div>

                                <div>

                                </div>


                            </Link>





                            <Link to="/login" className='TransLimit__container-card'>
                                <div className="TransLimit__container-cardInfo">

                                    
                                    <h3 className='TransLimit__container-cardInfo'>Transaction Limits</h3>
                                    <p className='TransLimit__container-cardInfo'>Oat cake muffin jelly croissant fruitcake topping candy canes sugar plum. Cotton candy tiramisu Tart cupcake dessert.Icing cheesecake bonbon cheesecake. Brownie gummi bears cake jelly cake cupcake gummies jelly. 
                                    
                                    

</p>


                                    <Button buttonSize='btn--tiny' buttonColor='blue'>
                                        arrrrow
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

export default DashboardBottom;
