import React from 'react'
import { IconContext } from 'react-icons/lib';
import './Dashboard.css';
import TransferMoney from './TransferMoney';


function DashboardTop() {
    return (
        <IconContext.Provider value={{ color: '#fff', size: 30 }}>




            <div>
            

                   
                <div className="pricing__section">




                    <div className="pricing__wrapper">




                        <div className="pricing__container">



                            <div className='UseableFunds__container-card'>
                            <TransferMoney />
                                <div className="UseableFunds__container-cardInfo">


                                    <p>Checking and Savings</p>
                                    <h1>Total Available Funds</h1>
                                </div>


                                <div className='RightSide_UsableFunds'>
                                    <h4>$152,452</h4>
                                    <p>Available Funds</p>
                                </div>



                       

                                <div>

                                </div>


                            </div>






                            <div className='pricing__container-card'>
                                <div className="pricing__container-cardInfo">

                                    <p>CD and IRA</p>
                                    <h3>Vault Funds</h3>
                                    <h4>$367,983</h4>
                                    <p>Locked Funds</p>

                                   
                                
                                </div>
                                
                            </div>







                        </div>
                    </div>
                </div>
            </div>
        </IconContext.Provider>
    );
}

export default DashboardTop;



/*
<div className='Transfer_Money_Button'>
<Button buttonSize='btn--tiny' buttonColor='blue'>
    Transfer Money
</Button>

</div>

*/