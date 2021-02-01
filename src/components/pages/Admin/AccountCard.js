import React from 'react';
import './AccCard.css';
import { FaFire } from 'react-icons/fa'
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';



function AccountCard(props){
    console.log(props);
    return(
        <div className="account-card">

            <div className="Icon">
                {props.icon === "FaFire" && <FaFire />}
                {props.icon === "BsXDiamondFill" && <BsXDiamondFill />}
                {props.icon === "GiCrystalize" && <GiCrystalize />}
            </div>
            <h3 className="account-name">{props.name}</h3>
            <h3 className="account-amount">{props.amount}</h3>

        </div>
    )
}

export default AccountCard