import React, { useState } from 'react'
import styled from 'styled-components';
import { Modal } from './TransferMoneyModal';


const Container =styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

`

const Button = styled.button`
    min-width: 100px;
    padding: 10px 22px;
    border-radius: 5px;
    border: none;
    background: #117B01;
    color: #fff;
    font-size: 15px;
    cursor: pointer;
`


function TransferMoney() {

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev);
    };

    return (
        <>
        <Modal showModal={ showModal } setShowModal = { setShowModal } />
                <Button onClick={ openModal } >Transfer Money</Button>
                
        </>
    );
}

export default TransferMoney;
