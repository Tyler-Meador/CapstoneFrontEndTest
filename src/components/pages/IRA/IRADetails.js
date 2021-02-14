import React, { useEffect } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import '../Checking/CheckingDetails.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import NumberFormat from 'react-number-format';


function IRADetails({rothBalance, regBalance, rollBalance, user}) {

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
                        MERIT BANK IRA
                </h1>

                </div>
            </div>



            < Sidebar />

            <div className='currentCards1'>

                <div class="card">
                    <img src='images/undraw_Success_factors_re_ce93.svg' class="card-img-top" />
                    <div class="card-body">
                        <h1 className="Top-card-title">{user.firstName}'s IRA Account Details</h1>
                        <p className="Top-card-text">
                            Merit Bank AdvantagePlus Banking®
        </p>
                        <p className="Top-card-text">
                        Choose from a wide variety of investment products.
                            Refine your retirement strategy with innovative tools and calculators
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
                        <h2 className="card_title">Regular IRA Balance</h2>
                        <p className="card_text2"><NumberFormat value={regBalance} decimalScale={2} fixedDecimalScale={true} displayType={'text'} thousandSeparator={true} prefix={'$'}/></p>
                        <p className="card_text">Locked Funds</p>

                    </div>
                </li>



            </ul>






            <div className='transctions'>
                <h2>CD TRANSACTION ACTIVITY</h2>
                <table>

                    <thead>
                        <tr>
                            <th>FROM</th>
                            <th>TO</th>
                            <th>AMOUNT</th>
                            <th>INTEREST RATE</th>
                            <th>DATE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td data-column="FROM">Savings</td>
                            <td data-column="TO">IRA</td>
                            <td data-column="AMOUNT">$1000</td>
                            <td data-column="INTEREST RATE">20%</td>
                            <td data-column="DATE">02/03/2021</td>
                        </tr>
                        <tr>
                            <td data-column="FROM">Checking</td>
                            <td data-column="TO">IRA</td>
                            <td data-column="AMOUNT">$2000</td>
                            <td data-column="INTEREST RATE">5%</td>
                            <td data-column="DATE">02/06/2021</td>
                        </tr>
                        <tr>
                            <td data-column="FROM">Savings</td>
                            <td data-column="TO">IRA</td>
                            <td data-column="AMOUNT">$5000</td>
                            <td data-column="INTEREST RATE">10%</td>
                            <td data-column="DATE">02/09/2021</td>
                        </tr>

                    </tbody>
                </table>


            </div>

            <ul className='ListCards'>
                <li className="cards_item">
                    <div className="CLEARcard_content">
                    </div>
                </li>


                <li className="cards_item">
                    <div className="card_content">
                        <h2 className="card_title">Rollover IRA Balance</h2>
                        <p className="card_text2"><NumberFormat value={rollBalance} decimalScale={2} fixedDecimalScale={true} displayType={'text'} thousandSeparator={true} prefix={'$'}/></p>
                        <p className="card_text">Locked Funds</p>

                    </div>
                </li>



            </ul>
            <div className='transctions'>
                <h2>ROLLOVER IRA TRANSACTION ACTIVITY</h2>
                <table>

                    <thead>
                        <tr>
                            <th>FROM</th>
                            <th>TO</th>
                            <th>AMOUNT</th>
                            <th>INTEREST RATE</th>
                            <th>DATE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td data-column="FROM">Savings</td>
                            <td data-column="TO">Rollover IRA</td>
                            <td data-column="AMOUNT">$1000</td>
                            <td data-column="INTEREST RATE">20%</td>
                            <td data-column="DATE">02/03/2021</td>
                        </tr>
                        <tr>
                            <td data-column="FROM">Savings</td>
                            <td data-column="TO">Rollover IRA</td>
                            <td data-column="AMOUNT">$1000</td>
                            <td data-column="INTEREST RATE">5%</td>
                            <td data-column="DATE">02/02/2021</td>
                        </tr>
                        <tr>
                            <td data-column="FROM">Savings</td>
                            <td data-column="TO">Rollover IRA</td>
                            <td data-column="AMOUNT">$500</td>
                            <td data-column="INTEREST RATE">10%</td>
                            <td data-column="DATE">02/01/2021</td>
                        </tr>

                    </tbody>
                </table>


            </div>

            <ul className='ListCards'>
                <li className="cards_item">
                    <div className="CLEARcard_content">
                    </div>
                </li>


                <li className="cards_item">
                    <div className="card_content">
                        <h2 className="card_title">ROTH IRA Balance</h2>
                        <p className="card_text2"><NumberFormat value={rothBalance} decimalScale={2} fixedDecimalScale={true} displayType={'text'} thousandSeparator={true} prefix={'$'}/></p>
                        <p className="card_text">Locked Funds</p>

                    </div>
                </li>



            </ul>
            <div className='transctions'>
                <h2>ROTH IRA TRANSACTION ACTIVITY</h2>
                <table>

                    <thead>
                        <tr>
                            <th>FROM</th>
                            <th>TO</th>
                            <th>AMOUNT</th>
                            <th>INTEREST RATE</th>
                            <th>DATE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td data-column="FROM">Savings</td>
                            <td data-column="TO">Roth IRA</td>
                            <td data-column="AMOUNT">$100</td>
                            <td data-column="INTEREST RATE">20%</td>
                            <td data-column="DATE">02/07/2021</td>
                        </tr>
                        <tr>
                            <td data-column="FROM">Checking</td>
                            <td data-column="TO">Roth IRA</td>
                            <td data-column="AMOUNT">$400</td>
                            <td data-column="INTEREST RATE">5%</td>
                            <td data-column="DATE">01/23/2021</td>
                        </tr>
                        <tr>
                            <td data-column="FROM">Savings</td>
                            <td data-column="TO">Roth IRA</td>
                            <td data-column="AMOUNT">$500</td>
                            <td data-column="INTEREST RATE">10%</td>
                            <td data-column="DATE">12/29/2020</td>
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
        rothBalance: state.Roth.balance,
        regBalance: state.Reg.balance,
        rollBalance: state.Roll.balance
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(IRADetails);