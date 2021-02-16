import React, { useState, useEffect} from 'react'
import '../Checking/CheckingDetails.css';
import Sidebar from '../../Sidebar/Sidebar';
import '../TransferM/TransferM.css';
import { FormGroup, Label, InputGroup, InputGroupAddon, InputGroupText, Button, Input } from 'reactstrap';
import { connect } from 'react-redux'
import { fetchTransaction} from '../../../redux/Transaction/TransactionActions';




function TransferM({fetchTransaction, user, token, error, loading, success, checkingBalance, dbaBalance, savingsBalance, cdBalance, rollBalance, rothBalance, regBalance}) {


    const [transfer, setTransfer] = useState({
        sourceAccount: '',
        targetAccount: 0,
        amount: 0
    });




    function filterTo(e){
        const { name, value } = e.target;
        if(value === "Personal Checking"){
            setTransfer({
              ...transfer,
                [name]: user.checkingAccounts[0].accountNumber
            });
        }
        else if( value === "DBA Checking"){
          setTransfer({
            ...transfer,
            [name]: user.dbacheckingAccounts[0].accountNumber
          });
        }
        else if( value === "Savings"){
          setTransfer({
            ...transfer,
            [name]: user.savingsAccount[0].accountNumber
          });
        }
        else if(value === "CD"){
          setTransfer({
            ...transfer,
            [name]: user.cdaccount[0].accountNumber
          });
        }
        else if(value === "Rollover IRA"){
          setTransfer({
            ...transfer,
            [name]: user.rolloverIRA[0].accountNumber
          })
        }
        else if(value === "Roth IRA"){
          setTransfer({
            ...transfer,
            [name]: user.rothIRA[0].accountNumber
          })
        }
        else if(value === "Regular IRA"){
          setTransfer({
            ...transfer,
            [name]: user.regularIRA[0].accountNumber
          })
        }

        console.log(transfer)
    }
    
    function filterFrom(e){
      const { name, value } = e.target;
      if(value === "Personal Checking"){
          setTransfer({
            ...transfer,
              [name]: user.checkingAccounts[0].accountNumber
          });
      }
      else if( value === "DBA Checking"){
        setTransfer({
          ...transfer,
          [name]: user.dbacheckingAccounts[0].accountNumber
        });
      }
      else if( value === "Savings"){
        setTransfer({
          ...transfer,
          [name]: user.savingsAccount[0].accountNumber
        });
      }
      else if(value === "CD"){
        setTransfer({
          ...transfer,
          [name]: user.cdaccount[0].accountNumber
        });
      }
      else if(value === "Rollover IRA"){
        setTransfer({
          ...transfer,
          [name]: user.rolloverIRA[0].accountNumber
        })
      }
      else if(value === "Roth IRA"){
        setTransfer({
          ...transfer,
          [name]: user.rothIRA[0].accountNumber
        })
      }
      else if(value === "Regular IRA"){
        setTransfer({
          ...transfer,
          [name]: user.regularIRA[0].accountNumber
        })
      }


      console.log(user.checkingAccounts[0].accountNumber)
      console.log(transfer)
    }
    
    function handleAmount(e){
      const { name, value } = e.target;
      setTransfer({
        ...transfer,
        [name]: value
      })
    }

    function handleSubmit(){
      console.log(transfer)
      fetchTransaction(transfer, token)
      
    }


    return (
        <>
        <div className='HeroContainerDash'>
            <video className='VideoBg' loop autoPlay>
                <source src='videos/video.mp4' type="video/mp4" />
            </video>

            <div className='HeroContent'>

                <h1 className='HeroH1'>
                    TRANSFER MONEY
                </h1>

            </div>
        </div>
        


        < Sidebar />

      <div class="services" id="services">
        <div class="services__wrapper">
          <div class="services__card">
            <img src='images/Flogo_NavBar-FullColor.png' className="img-top" />
            <p>Secure. Fast. Simple. Anytime.</p>

            <div className="money-box">
              
              <form id="moneyB" action="" method="">
              <h2>AMOUNT</h2>
                  <label for="amount"></label>
                  <div className="flex">
                      <span className="currency">$</span>
                      <input class="account_dropdown2" name="amount" type="number" step="0.01" min="0.01" required="required" maxLength="6" onChange={handleAmount}/>
        
                      <h4 className="flex">Payment amount must be $0.01 or more</h4>
                  </div>
              </form>
            </div>
            
            <h2>FROM</h2>
            <div>
              <select class="account_dropdown" name="sourceAccount" onChange={filterFrom}>
                <option selected> </option>
                <option value="Personal Checking">Personal Checking ({checkingBalance.toFixed(2)})</option>
                <option value="DBA Checking">DBA Checking ({dbaBalance.toFixed(2)})</option>
                <option value="Savings">Savings ({savingsBalance.toFixed(2)})</option>
                <option value="Certificate of Deposit">Certificate of Deposit ({cdBalance})</option>
                <option value="Rollover IRA">Rollover IRA ({rollBalance.toFixed(2)})</option>
                <option value="Roth IRA">Roth IRA ({rothBalance.toFixed(2)})</option>
                <option value="Regular IRA">Regular IRA ({regBalance.toFixed(2)})</option>
              </select>
            </div>

            <h2>TO</h2>
            <div>
              <select class="account_dropdown" name="targetAccount" onChange={filterTo}>
              <option selected> </option>
                <option value="Personal Checking">Personal Checking ({checkingBalance.toFixed(2)})</option>
                <option value="DBA Checking">DBA Checking ({dbaBalance.toFixed(2)})</option>
                <option value="Savings">Savings ({savingsBalance.toFixed(2)})</option>
                <option value="Certificate of Deposit">Certificate of Deposit ({cdBalance})</option>
                <option value="Rollover IRA">Rollover IRA ({rollBalance.toFixed(2)})</option>
                <option value="Roth IRA">Roth IRA ({rothBalance.toFixed(2)})</option>
                <option value="Regular IRA">Regular IRA ({regBalance.toFixed(2)})</option>
              </select>
            </div>

            <div class="services__btn">
              <button  onClick={handleSubmit}>TRANSFER SECURELY</button>
            </div>
            {loading &&(<p>Loading....</p>)}
            {!loading &&(success &&(<p>Transfer Success!!</p>))}
            {!loading &&(error &&(<p>{error}</p>))}
            <h4 className="auto">Set up an automatic payment for this account</h4>
          </div>
          
        </div>
      </div>

    </>
    )
}
const mapStateToProps = state => {
    return {
        user: state.User.user,
        token: state.Login.token,
        error: state.Transaction.error,
        loading: state.Transaction.loading,
        success: state.Transaction.success,
        checkingBalance: state.Checking.balance,
        dbaBalance: state.DBA.balance,
        cdBalance: state.CD.balance,
        savingsBalance: state.Savings.balance,
        rothBalance: state.Roth.balance,
        regBalance: state.Reg.balance,
        rollBalance: state.Roll.balance

    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        fetchTransaction: (transaction, token) => dispatch(fetchTransaction(transaction, token))
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(TransferM);
