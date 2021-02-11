import React from 'react';
import AccountCard from './AccountCard';
import accountData from './AccountData';
import RequestCard from './RequestCard';
import HistoryCard from './HistoryCard';
import requestData from './RequestData';
import historyData from './HistoryData';
import HeroSection from './HeroSection';
import { homeObjOne } from './HeroData';
import './admin.css';


class Admin extends React.Component {
    constructor(){
        super()
        this.state={
            accounts: accountData,
            requests: requestData,
            history: historyData
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id){
        this.setState(prevState => {
            const updatedRequests = prevState.requests.map(request => {
                 if(request.id === id){
                     request.approved = !request.approved
                 }
                 return request
                })
            return {
                requests: updatedRequests
            }
        })

    }
   
    render(){

        const accountComponents = this.state.accounts.map(account => {
            return <AccountCard key={account.id} name={account.name} amount={account.amount} icon={account.icon}/>
        })
    
        const requestComponents = this.state.requests.map(request => {
            return <RequestCard id={request.id} name={request.name} accountType={request.accountType} email={request.email} requestType={request.requestType} approved={request.approved} handleChange={this.handleChange}/>
        })

        const historyComponents = this.state.history.map(request => {
            return <HistoryCard id={request.id} name={request.name} accountType={request.accountType} email={request.email} requestType={request.requestType} approved={request.approved} />
        })
    
    
        return(
            <div className="background">
                <>
                    <HeroSection { ...homeObjOne } />
                </>


                <div className="foreground">
                    <h1 className="title">Active Accounts</h1>
                    <div className="Accounts">
                        {accountComponents}
                    </div>
        
                    <h1 className="title">Current Requests</h1>
                    <div className="ActiveRequests">
                        {requestComponents}
                    </div>

                    <h1 className="title">Request History</h1>
                    <div className="RequestHistory">
                        {historyComponents}
                    </div>
                </div>
                

            </div>     
        )
    
    

    }
}

export default Admin