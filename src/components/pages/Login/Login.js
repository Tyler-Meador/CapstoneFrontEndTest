import React, { useEffect } from 'react'
//pulling data properties 
//import FormSuccess from '../Form/FormSuccess';
import Form from '../Form/Form';
//import Dashboard from '../Dashboard/Dashboard';
//import submitForm from './components/pages/Form/Form';
import '../Form/Form.css';

function Login() {

    useEffect(() => {
        window.scrollTo(0,0)
    });

    return (
            <>
                <Form />
                
            </>
    );
};

export default Login;