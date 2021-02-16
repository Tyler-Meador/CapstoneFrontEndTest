import React, { useEffect } from 'react'
import Sidebar from '../../Sidebar/Sidebar';
import '../../pages/Dashboard/Dashboard.css';
import '../Checking/CheckingDetails.css';
import { connect } from 'react-redux'
import "../TransferM/TransferM.css";
import NumberFormat from 'react-number-format';
import HistoryCard from './HistoryCard';


function CheckingDetails({user, checkingBalance, dbaBalance}) {

    useEffect(() => {
        window.scrollTo(0,0)
    });

    
    const checkingHistory = user.checkingAccounts[0].transactions.map(account => {
        if(account.transactionSuccess === true){
                return (

                    <HistoryCard key={account.id} sourceAccount={account.sourceAccount} targetAccount={account.targetAccount} amount={account.amount}/>
                );
        }

    })


    const dbaHistory = user.dbacheckingAccounts[0].transactions.map(test => {
        if(test.transactionSuccess === true){

            return <HistoryCard key={test.id} sourceAccount={test.sourceAccount} targetAccount={test.targetAccount} amount={test.amount}/>
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
                        <h2 className="IRAwarning">
                            When closing the checking account,
                        </h2>
                        <h2 className="IRAwarning">
                             the balance has to be transferred to the savings account only
                        </h2>
                    </div>
                </div>
            </div>


            <ul className='ListCards'>
                <li className="cards_item">
                    <div className="CLEARcard_content"></div>
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
                        </tr>
                    </thead>
                    {checkingHistory.slice(-10)}
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
                    </tr>
                    </thead>
                {dbaHistory.slice(-10)}
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
