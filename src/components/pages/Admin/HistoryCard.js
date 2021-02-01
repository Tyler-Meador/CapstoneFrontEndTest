import React from 'react';
import { FaFire } from 'react-icons/fa'
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';


function HistoryCard(props){
    console.log(props);
    return(
        <div className="request-card">
            <h2>Request Type: {props.requestType}</h2>
            <h3>Account Type: {props.accountType}</h3>
            <h4>Name: {props.name}</h4>
            <h4>Email: {props.email}</h4>
            <div className="icon">
                {props.accountType === "Savings" && <FaFire />}
                {props.accountType === "Checking" && <BsXDiamondFill />}
                  {props.accountType === "IRA" && <GiCrystalize />}
            </div>

        </div>
    )
}

export default HistoryCard