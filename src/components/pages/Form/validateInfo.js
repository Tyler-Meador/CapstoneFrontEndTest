// logic to tell us if we typed in the incorrect info 
//VALIDATION ERRORS

export default function validateInfo(values) {
    let errors = {}

// SHOWS username required 
    /*if(!values.username.trim()) {
        errors.username = "Username required"
    }*/

// SHOWS email required - Long code will force an email format
// if no value it will say email required 
//if value is not in the right format then it will say INVALID
    if(!values.username) {
        errors.username = "Email required"
    } else if(values.username.length < 6) {
        errors.username = "Username needs to be 6 characters or more"
    }

//PASSWORD
    if(!values.password) {
        errors.password = 'Password is required'
    } else if (values.password.length < 8) {
        errors.password = 'Password needs to be 8 characters or more'
    }



//PASSWORD NEED TO MATCH
    /*if(!values.password2) {
        errors.password2 = 'Password is required'
    } else if (values.password2 !== values.password) {
        errors.password2 = 'Passwords do not match'
    }*/

    return errors;

}



/*
if(!values.username) {
    errors.username = "Email required"
} else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Email address is invalid"
}

*/