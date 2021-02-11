import React from 'react';
import './RequestCardCss.css';
import { Button } from '../../Button'
import { FaFire } from 'react-icons/fa'
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';


function RequestCard(props){
    console.log(props);
    return(
        <div>
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

            <div className="buttons">
                <Button buttonColor='primary' buttonSize='btn--wide'>Approve</Button><Button buttonColor='primary' buttonSize='btn--wide'>Deny</Button>
            </div>
            
        </div>
    )
}

export default RequestCard