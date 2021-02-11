import { useState, useEffect} from 'react';

// Use Form 
//pass validate as a parameter 

const useForm = (callback, validate) => {
 const [values, setValues] = useState({
        username: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    const [isSubmitting, setIsSubmitting] = useState(false);

    //e = event

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
            // above replaces this e.target.name: e.target.value
        });
    };


//prevents the restart of the page after login 
    const handleSubmit = e => {
        e.preventDefault();

        setErrors(validate(values));

        setIsSubmitting(true);
    };

    useEffect (
        () => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback();
        }
    },
        [errors]
    );


    return { handleChange, handleSubmit, values, errors };
};

export default useForm;