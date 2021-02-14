import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { fetchUser } from '../../../redux/User/UserActions'
import { fetchCheckingBalance, fetchSavingsBalance, fetchCDBalance, fetchDBABalance, fetchRothIRABalance, fetchRolloverIRABalance, fetchRegIRABalance  } from '../../../redux/Balance/BalanceActions'
//import './Pricing.css';
import './Dashboard.css';
import NumberFormat from 'react-number-format';




function DashboardAccounts({fetchCheckingBalance, fetchSavingsBalance, fetchCDBalance, fetchDBABalance, fetchRothIRABalance, fetchRolloverIRABalance, fetchRegIRABalance, token, user, checkingBalance, savingsBalance, cdBalance, dbaBalance, rothBalance, rollBalance, regBalance}) {
  useEffect(() => {
    console.log('token: ' + token)
    fetchCheckingBalance(token, 'CheckingAccount')
    fetchSavingsBalance(token, 'SavingsAccount')
    fetchCDBalance(token, 'CDAccount')
    fetchDBABalance(token, 'DBACheckingAccount')
    fetchRothIRABalance(token, 'RothIRA')
    fetchRolloverIRABalance(token, 'RolloverIRA')
    fetchRegIRABalance(token, 'RegularIRA')

    

},[])



  return (


    <div className='currentCards1'>

      <div class="card">
        <img src='images/undraw_statistic_chart_38b6.svg' class="card-img-top" />
        <div class="card-body">
          <h1 className="Top-card-title">{user.firstName} {user.lastName}</h1>
            <p className="Top-card-text">
              Merit Bank AdvantagePlus Banking®
            </p>
            <p className="Top-card-text">
              A good choice if you use direct deposit and want a straightforward banking account
            </p>
        </div>
      </div>


      <ul className='ListCards'>


        <li className="cards_item">
          <div className="card_content">
            <h2 className="card_title">Personal Checking Balance</h2>
            <p className="card_text2"><NumberFormat value={checkingBalance} decimalScale={2} fixedDecimalScale={true} displayType={'text'} thousandSeparator={true} prefix={'$'}/></p>
            <p className="card_text">Available Funds</p>
            <Link to="/checking" className='Accounts__container-card'>
            <button className="btn card_btn">More Details</button>
            </Link>
          </div>
        </li>

        <li className="cards_item">
          <div className="card_content">
            <h2 className="card_title">DBA Checking Balance</h2>
            <p className="card_text2"><NumberFormat value={dbaBalance} decimalScale={2} fixedDecimalScale={true} displayType={'text'} thousandSeparator={true} prefix={'$'}/></p>
            <p className="card_text">Available Funds</p>
            <Link to="/checking" className='Accounts__container-card'>
            <button className="btn card_btn">More Details</button>
            </Link>
          </div>
        </li>


        <li className="cards_item">
          <div className="card_content">
            <h2 className="card_title">Savings Balance</h2>
            <p className="card_text2"><NumberFormat value={savingsBalance} decimalScale={2} fixedDecimalScale={true} displayType={'text'} thousandSeparator={true} prefix={'$'}/></p>
            <p className="card_text">Available Funds</p>
            <Link to="/savings" className='Accounts__container-card'>
            <button className="btn card_btn">More Details</button>
            </Link>
          </div>
        </li>


      </ul>
      <ul className='ListCards'>



        <li className="cards_item">
          <div className="card_content">
            <h2 className="card_title">Regular IRA Balance</h2>
            <p className="card_text2"><NumberFormat value={regBalance} decimalScale={2} fixedDecimalScale={true} displayType={'text'} thousandSeparator={true} prefix={'$'}/></p>
            <p className="card_text">Locked Funds</p>
            <Link to="/ira" className='Accounts__container-card'>
            <button className="btn card_btn">More Details</button>
            </Link>
          </div>
        </li>


        <li className="cards_item">
          <div className="card_content">
            <h2 className="card_title">Rollover IRA Balance</h2>
            <p className="card_text2"><NumberFormat value={rollBalance} decimalScale={2} fixedDecimalScale={true} displayType={'text'} thousandSeparator={true} prefix={'$'}/></p>
            <p className="card_text">Locked Funds</p>
            <Link to="/ira" className='Accounts__container-card'>
            <button className="btn card_btn">More Details</button>
            </Link>
          </div>
        </li>

        <li className="cards_item">
          <div className="card_content">
            <h2 className="card_title">Roth IRA Balance</h2>
            <p className="card_text2"><NumberFormat value={rothBalance} decimalScale={2} fixedDecimalScale={true} displayType={'text'} thousandSeparator={true} prefix={'$'}/></p>
            <p className="card_text">Locked Funds</p>
            <Link to="/ira" className='Accounts__container-card'>
            <button className="btn card_btn">More Details</button>
            </Link>
          </div>
        </li>




      </ul>

      <ul className='ListCards'>

        <li className="cards_item">
          <div className="CLEARcard_content">
          </div>
        </li>

        <li className="cards_item">
          <div className="card_content">
            <h2 className="card_title">CD Balance</h2>
            <p className="card_text2"><NumberFormat value={cdBalance} decimalScale={2} fixedDecimalScale={true} displayType={'text'} thousandSeparator={true} prefix={'$'}/></p>
            <p className="card_text">Locked Funds</p>
            <Link to="/cdaccount" className='Accounts__container-card'>
            <button className="btn card_btn">More Details</button>
            </Link>
          </div>
        </li>

        <li className="cards_item">
          <div className="CLEARcard_content">
          </div>
        </li>


      </ul>

    </div>






  );
}

const mapStateToProps = state => {
  return {
      isLoggedIn: state.isLoggedIn,
      user: state.User.user,
      token: state.Login.token,
      checkingBalance: state.Checking.balance,
      savingsBalance: state.Savings.balance,
      cdBalance: state.CD.balance,
      dbaBalance: state.DBA.balance,
      rothBalance: state.Roth.balance,
      rollBalance: state.Roll.balance,
      regBalance: state.Reg.balance
  }
}

const mapDispatchToProps = dispatch => {
  return {
      fetchUser: token => dispatch(fetchUser(token)),
      fetchCheckingBalance: (token, account) => dispatch(fetchCheckingBalance(token, account)),
      fetchSavingsBalance: (token, account) => dispatch(fetchSavingsBalance(token, account)),
      fetchCDBalance: (token, account) => dispatch(fetchCDBalance(token, account)),
      fetchDBABalance: (token, account) => dispatch(fetchDBABalance(token, account)),
      fetchRothIRABalance: (token, account) => dispatch(fetchRothIRABalance(token, account)),
      fetchRolloverIRABalance: (token, account) => dispatch(fetchRolloverIRABalance(token, account)),
      fetchRegIRABalance: (token, account) => dispatch(fetchRegIRABalance(token, account)),
      

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardAccounts);




/*
            <div>
                <div className="pricing__section2">
                    <div className="pricing__wrapper">

                        <div className="pricing__container">


                            <Link to="/checking" className='Accounts__container-card'>
                                <div className="Accounts__container-cardInfo">

                                <div className='Accounts_UsableFunds'>
                                    <div className="icon">
                                        <RiSafe2Line />
                                    </div>

                                    <h3>Checking Account</h3>
                                    <h4>$52,452</h4>
                                    <p> Available Funds </p>
                                    </div>


                                </div>
                            </Link>




                            <Link to="/savings" className='Accounts__container-card'>
                                <div className="Accounts__container-cardInfo">

                                <div className='Accounts_UsableFunds'>
                                    <div className="icon">
                                        <RiSafe2Line />
                                    </div>

                                    <h3>Savings Account</h3>
                                    <h4>$100,000</h4>
                                    <p> Available Funds </p>
                                    </div>


                                </div>
                            </Link>




                            </div>




                            <Link to="/cdaccount" className='Accounts__container-card'>
                                <div className="Accounts__container-cardInfo">

                                <div className='Accounts_UsableFunds'>
                                    <div className="icon">
                                        <RiSafeLine />
                                    </div>

                                    <h3>CD Account</h3>
                                    <h4>$300,000</h4>
                                    <p> Locked Funds </p>
                                    </div>


                                </div>
                            </Link>







                            <Link to="/iraaccount" className='Accounts__container-card'>
                                <div className="Accounts__container-cardInfo">

                                <div className='Accounts_UsableFunds'>
                                    <div className="icon">
                                        <RiSafeLine />
                                    </div>

                                    <h3>IRA Account</h3>
                                    <h4>$67,983</h4>
                                    <p> Locked Funds </p>
                                    </div>


                                </div>
                            </Link>





                            </div>




*/