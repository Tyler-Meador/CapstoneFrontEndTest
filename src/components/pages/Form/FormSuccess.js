import React from 'react';
import './Form.css';
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { fetchUser } from '../../../redux/User/UserActions';


const FormSuccess = ({fetchUser,token}) => {
    return (
        <div className='form-content-right'>
            <h1 className='form-success'></h1>
            <img className='form-img-2' src='images/undraw_authentication_fsn5.svg' alt='success-image' />

            <Link to="/dashboard">
                <button className="form-input-btn-success" type='submit' onClick={() => fetchUser(token)}> ENTER DASHBOARD </button>
            </Link>
        </div>
    );
};
const mapStateToProps = state => {
    return {
        token: state.Login.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUser: token => dispatch(fetchUser(token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormSuccess);
