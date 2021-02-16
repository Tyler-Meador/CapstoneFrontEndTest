import React, { useEffect } from 'react'
import Sidebar from '../../Sidebar/Sidebar';
import '../Checking/CheckingDetails.css';
import { connect } from 'react-redux'
import NumberFormat from 'react-number-format';
import HistoryCard from '../Checking/HistoryCard'



function SavingDetails({user, balance}) {

    useEffect(() => {
        window.scrollTo(0,0)
    });


    const savingsHistory = user.savingsAccount[0].transactions.slice(-10).map(account => {

        if(account.transactionSuccess === true){
                return <HistoryCard key={account.id} sourceAccount={account.sourceAccount} targetAccount={account.targetAccount} amount={account.amount}/>
        }

    })

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
                            Merit Bank AdvantagePlus Banking®</p>
                        <p className="Top-card-text">
                        The high-yield Online Savings Account you deserve. Our award-winning savings account provides a rate that’s 4X the National Average.</p>
                    </div>
                </div>
            </div>





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

                        </tr>
                    </thead>
                {savingsHistory.reverse()}
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
