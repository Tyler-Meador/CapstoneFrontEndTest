import React, { useState } from 'react';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import './Form.css';

// line28: if its not submitted if thats true then display formsignup and pass in submitform equal to submitform ELSE form submitted pass formsucess

const Form = () => {

    const [isSubmitted, setIsSubmitted] = useState(false);

    //function submit to true
    function submitForm() {
        setIsSubmitted(true);
    }

    return (
        <>

            <div className='form-container'>

                <div className='form-content-left'>

                    <img className='image-form' src='images/login_1.svg' alt='LoginImage'  />

                </div>
                {!isSubmitted ? (
                <FormSignup submitForm={ submitForm } />
                ) : (
                <FormSuccess />
                )}
            </div>
        </>
    );
};

export default Form;