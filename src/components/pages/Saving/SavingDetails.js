import React, { useEffect } from 'react'
import Sidebar from '../../Sidebar/Sidebar';
import '../Checking/CheckingDetails.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import NumberFormat from 'react-number-format';



function SavingDetails({user, balance}) {

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
                        MERIT BANK SAVINGS
                </h1>

                </div>
            </div>

            < Sidebar />





            <div className='currentCards1'>

                <div class="card">
                    <img src='images/undraw_Savings_re_eq4w.svg' class="card-img-top" />
                    <div class="card-body">
                        <h1 className="Top-card-title">{user.firstName}'s Savings Account Details</h1>
                        <p className="Top-card-text">
                            Merit Bank AdvantagePlus Banking®
</p>
                        <p className="Top-card-text">
                        The high-yield Online Savings Account you deserve. Our award-winning savings account provides a rate that’s 4X the National Average.</p>
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
                        <h2 className="card_title">Savings Balance</h2>
                        <p className="card_text2"><NumberFormat value={balance} decimalScale={2} fixedDecimalScale={true} displayType={'text'} thousandSeparator={true} prefix={'$'}/></p>
                        <p className="card_text">Available Funds</p>

                    </div>
                </li>



            </ul>






            <div className='transctions'>
                <h2>SAVINGS TRANSACTION ACTIVITY</h2>
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
                            <td data-column="FROM">Savings</td>
                            <td data-column="TO">Checking</td>
                            <td data-column="AMOUNT">$700</td>
                            <td data-column="DATE">02/03/2021</td>
                        </tr>
                        <tr>
                            <td data-column="FROM">Savings</td>
                            <td data-column="TO">Checking</td>
                            <td data-column="AMOUNT">$8950</td>
                            <td data-column="DATE">02/05/2021</td>
                        </tr>
                        <tr>
                            <td data-column="FROM">Savings</td>
                            <td data-column="TO">Checking</td>
                            <td data-column="AMOUNT">$1300</td>
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
        balance: state.Savings.balance
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(SavingDetails);
