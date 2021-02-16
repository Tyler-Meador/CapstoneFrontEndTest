import React, { useState } from 'react';
// import the custom hook
import useForm from './useForm';
import validate from './validateInfo';
import './Form.css';
import { fetchToken } from '../../../redux/Login/LoginActions'
import { connect } from 'react-redux'

// LINE 34: double AND - errors in user name IF TRUE return whatever we pass after that (in this case we are showcasing the "Username required" text) 


const FormSignup = ({submitForm, fetchToken}) => {
// ***** LOOK here if ERROR says something is not defined ******

const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validate);



// THIS USE TO BE A REGISTRATION PAGE - Now this is the Login!

    return (

        <div className="form-content-right">
            <form className="form" onSubmit={ handleSubmit }>
                <h1>LOGIN
                </h1>




                <div className='form-inputs'>
                    <label htmlFor='email' className='form-label'>
                        Username
                        </label>
                    <input
                        id='username'
                        type='text'
                        name='username'
                        className='form-input'
                        placeholder='Username'
                        value={values.username}
                        onChange={ handleChange}
                    />

                    { errors.username && <p>{errors.username}</p>}
                    
                </div>



                <div className='form-inputs'>
                    <label htmlFor='password' className='form-label'>
                        Password
                        </label>
                    <input
                        id='password'
                        type='password'
                        name='password'
                        className='form-input'
                        placeholder='Enter your password'
                        value={values.password}
                        onChange={handleChange}
                    />

                    { errors.password && <p>{errors.password}</p>}

                </div>
                






                <button className="form-input-btn" type='submit' onClick={() => fetchToken(values)}>LOGIN</button>

                <span className="form-input-login"> Don't have an account? Register <a href="/login"> here!</a>
                </span>

            </form>

        </div>


    )
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.Login.isLoggedIn,
        token: state.Login.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchToken: values => dispatch(fetchToken(values))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormSignup);
