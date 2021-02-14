import React, { useEffect } from 'react'
import Sidebar from '../../Sidebar/Sidebar';
import '../../pages/Dashboard/Dashboard.css';
import '../Checking/CheckingDetails.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import "../TransferM/TransferM.css";
import NumberFormat from 'react-number-format';


function CheckingDetails({user, checkingBalance, dbaBalance}) {

    useEffect(() => {
        window.scrollTo(0,0)
    });

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
                            No minimums, no fees, no worries. Access to 16,000 ATMs and more than 4,700 branches
                        </p>
                    </div>
                </div>
            </div>

            <ul className="ListCards">

                <li className="cards_item">
                    <div className="CLEARcard_content"></div>
                </li>
                

                <Link to="/transfermoney">
                    <div className="money-box2">
                        
                        <form id="moneyB2" action="" method="">
                            <h2 className="card_title">TRANSFER MONEY</h2>
                            
                        </form>
                    </div>
                </Link>
                

            
            </ul>


            <ul className='ListCards'>
                <li className="cards_item">
                    <div className="CLEARcard_content">
                    </div>
                </li>


                <li className="cards_item">
                    <div className="card_content">
                        <h2 className="card_title">Personal Checking Balance</h2>
                        <p className="card_text2"><NumberFormat value={checkingBalance} decimalScale={2} fixedDecimalScale={true} displayType={'text'} thousandSeparator={true} prefix={'$'}/></p>
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
            <ul className="ListCards">
                <li className="cards_item">
                    <div className="CLEARcard_content"></div>
                </li>

                <li className="cards_item">
                    <div className="card_content">
                    <h2 className="card_title">DBA Checking Balance</h2>
                    <p className="card_text2"><NumberFormat value={dbaBalance} decimalScale={2} fixedDecimalScale={true} displayType={'text'} thousandSeparator={true} prefix={'$'}/></p>
                    <p className="card_text">Available Funds</p>
                    </div>
                </li>
            </ul>

            <div className="transctions">
                <h2>DBA Checking Transaction Activity</h2>
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
                        <td data-column="AMOUNT">$15,800</td>
                        <td data-column="DATE">02/13/2021</td>
                    </tr>
                    <tr>
                        <td data-column="FROM">Checking</td>
                        <td data-column="TO">Savings</td>
                        <td data-column="AMOUNT">$70</td>
                        <td data-column="DATE">02/08/2021</td>
                    </tr>
                    <tr>
                        <td data-column="FROM">Checking</td>
                        <td data-column="TO">Savings</td>
                        <td data-column="AMOUNT">$450</td>
                        <td data-column="DATE">01/30/2021</td>
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
        checkingBalance: state.Checking.balance,
        dbaBalance: state.DBA.balance
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(CheckingDetails);
