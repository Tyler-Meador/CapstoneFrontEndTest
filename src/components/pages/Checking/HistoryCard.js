import { connect } from 'react-redux'
import NumberFormat from 'react-number-format';

function HistoryCard(props){

    const target = (target) => {

        if(target === props.user.cdaccount[0].accountNumber){
            return "CD"
        }
        else if(target === props.user.checkingAccounts[0].accountNumber){
            return "Checking"
        }
        else if(target === props.user.dbacheckingAccounts[0].accountNumber){
            return "DBA Checking"
        }
        else if(target === props.user.regularIRA[0].accountNumber){
            return "Regular IRA"
        }
        else if(target === props.user.rolloverIRA[0].accountNumber){
            return "Rollover IRA"
        }
        else if(target === props.user.rothIRA[0].accountNumber){
            return "Roth IRA"
        }
        else if(target === props.user.savingsAccount[0].accountNumber){
            return "Savings"
        }
        else{
            return "test"
        }
        

    }

    const source = (source) => {

        if(source === props.user.cdaccount[0].accountNumber){
            return "CD"
        }
        else if(source === props.user.checkingAccounts[0].accountNumber){
            return "Checking"
        }
        else if(source === props.user.dbacheckingAccounts[0].accountNumber){
            return "DBA Checking"
        }
        else if(source === props.user.regularIRA[0].accountNumber){
            return "Regular IRA"
        }
        else if(source === props.user.rolloverIRA[0].accountNumber){
            return "Rollover IRA"
        }
        else if(source === props.user.rothIRA[0].accountNumber){
            return "Roth IRA"
        }
        else if(source === props.user.savingsAccount[0].accountNumber){
            return "Savings"
        }
        else{
            return "test"
        }
        

    }


        return(
            <tbody>
            <tr>
    
            </tr>
                <tr>
                    <td data-column="FROM">{source(props.sourceAccount)}</td>
                    <td data-column="TO">{target(props.targetAccount)}</td>
                    <td data-column="AMOUNT"><NumberFormat value={props.amount} decimalScale={2} fixedDecimalScale={true} displayType={'text'} thousandSeparator={true} prefix={'$'}/></td>
                </tr>
            </tbody>
        )


}
const mapStateToProps = state => {
    return {
        user: state.User.user
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {

  
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(HistoryCard);