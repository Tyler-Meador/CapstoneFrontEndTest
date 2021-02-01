import React from 'react';
// import the custom hook
import useForm from './useForm';
import validate from './validateInfo';
import './Form.css';

// LINE 34: double AND - errors in user name IF TRUE return whatever we pass after that (in this case we are showcasing the "Username required" text) 

const FormSignup = ({submitForm}) => {
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
                        Email
                        </label>
                    <input
                        id='email'
                        type='email'
                        name='email'
                        className='form-input'
                        placeholder='Enter your email'
                        value={values.email}
                        onChange={handleChange}
                    />

                    { errors.email && <p>{errors.email}</p>}

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






                <button className="form-input-btn" type='submit'>Login</button>

                <span className="form-input-login"> Don't have an account? Register <a href="/login"> here!</a>
                </span>

            </form>

        </div>


    )
}

export default FormSignup
