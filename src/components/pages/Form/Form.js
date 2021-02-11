import React, { useState } from 'react';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import './Form.css';
import { connect } from 'react-redux'

// line28: if its not submitted if thats true then display formsignup and pass in submitform equal to submitform ELSE form submitted pass formsucess

const Form = ({isLoggedIn}) => {

    const [isSubmitted, setIsSubmitted] = useState(false);
    

    //function submit to true
    function submitForm() {
        console.log(isLoggedIn)
        
        setIsSubmitted(true);
    }

    return (
        <>

            <div className='form-container'>

                <div className='form-content-left'>

                    <img className='image-form' src='images/undraw_enter_uhqk.svg' alt='LoginImage'  />

                </div>
                {!isLoggedIn ? (
                <FormSignup submitForm={ submitForm } />
                ) : (
                <FormSuccess />
                )}
            </div>
        </>
    );
};

const mapStateToProps = state => {
    return {
        isLoggedIn: state.Login.isLoggedIn
    }
}

const mapDispatchToProps = dispatch => {
    return { 
      
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
