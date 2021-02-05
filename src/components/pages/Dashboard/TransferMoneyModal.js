import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

//*******THIS DIDPLAYS THE INFORMATION ON THE TRANSFER MONEY SCREEN*******


const Background = styled.div`
    width: 920px;
    height: 600px;
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
`;


const ModalWrapper = styled.div`
    width: 800px;
    height: 500px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: #fff;
    color: #000;
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    z-index: 10;
    border-radius: 10px;
`;



const ModalImg = styled.svg`
    width: 100%;
    height: 100%;
    border-radius: 10px 0 0 10px;
    background: #000;
`;



const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.8;
    color: #141414;

    p {
    margin-bottom: 1rem;
    }

    button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
    }
`;


const CloseModalButton = styled(MdClose)`
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    padding: 0;
    z-index: 10;
`;


export const Modal = ({ showModal, setShowModal }) => {

    const modalRef = useRef()


    // ANIMATE THE MODAL DROP DOWN 
    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%)` : `translateY(-100%)`
    });


    // CLOSE WITH X
    const closeModal = e => {
        if (modalRef.current === e.target) {
            setShowModal(false)
        }
    };



    //ESCAPE WITH ECS KEY
    const keyPress = useCallback(
        e => {
            if (e.key === 'Escape' && showModal) {
                setShowModal(false);
            }
        },
        [setShowModal, showModal]
    );


    useEffect(
        () => {
            document.addEventListener('keydown', keyPress);
            return () => document.removeEventListener('keydown', keyPress);
        },
        [keyPress]
    );




    return (
        <>
            {showModal ? (
                <Background ref={modalRef} onClick={closeModal}>

                    <ModalWrapper showModal={showModal}>



                        <ModalContent>
                            <h1>TRANSFERING FROM</h1>

                            <form>
                                <select id="mySelect">
                                    <option>Checking</option>
                                    <option>Saving</option>
                                    <option>CD</option>
                                    <option>IRA</option>
                                </select>

                                    Account
                            </form>



                            <div className='form-inputs'>
                                <label htmlFor='password' className='form-label'>
                                    Password
                        </label>
                                <input
                                    id='transAmount'
                                    type='number'
                                    name='TransAmount'
                                    className='form-input'
                                    placeholder='Enter your Amount'
                                    required="required"
                                    min="0"
                                    max="1000"
                                    step="any"
                                />

                            </div>






                            <div class="main">


                                <form method="post" action="#"> 
                                    <label for="currency-field">Enter Amount</label>
                                    <input type="text" name="currency-field" id="currency-field" pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$" value="" data-type="currency" placeholder="$1,000,000.00">
                                        </input>
                                        <button type="submit">Submit</button>

                                        </form>

</div>









                        </ModalContent>


                            <ModalContent>
                                <h1>TO</h1>
                                <p>Give me allllll the moneys $$$$$$$$</p>
                                <button>MONEY PLEZZZZZ</button>
                            </ModalContent>
















                            <CloseModalButton aria-label='Close Modal' onClick={() => setShowModal(prev => !prev)} />
                    </ModalWrapper>

                </Background>
            ) : null}
        </>
            )
};
