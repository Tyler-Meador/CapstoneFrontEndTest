import React from 'react';
import './Form.css';
import { Link } from "react-router-dom";

const FormSuccess = () => {
    return (
        <div className='form-content-right'>
            <h1 className='form-success'> WELCOME MICHELLE </h1>
            <img className='form-img-2' src='images/undraw_authentication_fsn5.svg' alt='success-image' />

            <Link to="/dashboard">
            <button className="form-input-btn-success" type='submit'> ENTER DASHBOARD </button>
            </Link>
        </div>
    );
};

export default FormSuccess;
