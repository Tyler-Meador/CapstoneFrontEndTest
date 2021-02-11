import React from 'react'
import TransferM from '../TransferM/TransferM'
import Sidebar from '../../Sidebar/Sidebar';
import '../../pages/Dashboard/Dashboard.css';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import '../Checking/CheckingDetails.css';
import { Link } from 'react-router-dom';
import DashboardElements from '../../pages/Dashboard/DashboardElements';
import { connect } from 'react-redux'

import ReactPlayer from 'react-player'


function CheckingDetails({user, balance}) {
    return (
        <>


            <div className='HeroContainerDash'>
                <video className='VideoBg' loop autoPlay>
                    <source src='videos/oil.mp4' type="video/mp4" />
                </video>

                <div className='HeroContent'>

                    <h1 className='HeroH1'>
                        MERIT BANK CHECKING
                </h1>

                </div>
            </div>



            < Sidebar />
            <div className='currentCards1'>

                <div class="card">
                    <img src='images/undraw_Payments_re_77x0.svg' class="card-img-top" />
                    <div class="card-body">
                        <h1 className="Top-card-title">{user.firstName}'s Checking Account Details</h1>
                        <p className="Top-card-text">
                            Merit Bank AdvantagePlus Banking®
                        </p>
                        <p className="Top-card-text">
                            A good choice if you use direct deposit and want a straightforward banking account
                        </p>
                    </div>
                </div>
            </div>

            <Link to="/transfermoney" >
                <button className="Transbtn">Transfer Money</button>
            </Link>


            <ul className='ListCards'>
                <li className="cards_item">
                    <div className="CLEARcard_content">
                    </div>
                </li>


                <li className="cards_item">
                    <div className="card_content">
                        <h2 className="card_title">Checking Balance</h2>
                        <p className="card_text2">${balance}</p>
                        <p className="card_text">Available Funds</p>

                    </div>
                </li>



            </ul>






            <div className='transctions'>
                <h2>CHECKING TRANSACTION ACTIVITY</h2>
                <table>

                    <thead>
                        <tr>
                            <th>FROM</th>
                            <th>TO</th>
                            <th>AMOUNT</th>
                            <th>DATE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td data-column="FROM">Checking</td>
                            <td data-column="TO">Savings</td>
                            <td data-column="AMOUNT">$2000</td>
                            <td data-column="DATE">02/03/2021</td>
                        </tr>
                        <tr>
                            <td data-column="FROM">Checking</td>
                            <td data-column="TO">Savings</td>
                            <td data-column="AMOUNT">$850</td>
                            <td data-column="DATE">02/05/2021</td>
                        </tr>
                        <tr>
                            <td data-column="FROM">Checking</td>
                            <td data-column="TO">Savings</td>
                            <td data-column="AMOUNT">$500</td>
                            <td data-column="DATE">02/07/2021</td>
                        </tr>

                    </tbody>
                </table>


            </div>

        </>
    )
}
const mapStateToProps = state => {
    return {
        user: state.User.user,
        balance: state.Checking.balance
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(CheckingDetails);
