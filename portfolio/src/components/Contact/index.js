import React, { useState } from "react";
import { validateEmail } from '../../utils/helpers';

function ContactForm() {    
    
    const [formState, setFormState] = useState({ name: '', email: '', message: ''});
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    };

    function handleChange(e) {
        if (e.target.name === 'email') {
                const isValid = validateEmail(e.target.value);
                console.log(isValid);
            
            if (!isValid) {
                setErrorMessage('Your email is invalid');
            } else {
                if (!e.target.value.length) {
                    setErrorMessage(`${e.target.name} is required`);
                } else {
                setErrorMessage('');
                }
            }

            setFormState({...formState, name: e.target.value})
        
            setFormState({...formState, [e.target.name]: e.target.value })

            console.log('errorMessage', errorMessage);
        }
        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value });
        }
    };
    // console.log(formState)

    return (
        <section>
            <h1>Contact Me</h1>
            <form id='contact-form' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' defaultValue={formState.name} onBlur={handleChange} name='name' />
                </div>
                <div>
                    <label htmlFor='email' name='email'>Email address:</label>
                    <input type='email' defaultValue={formState.email} onBlur={handleChange} name='email' />
                </div>
                <div>
                    <label htmlFor='message'>Message:</label>
                    <textarea name='message' defaultValue={formState.message} onBlur={handleChange} rows='5' />
                </div>

                <button type='submit'>Submit:</button>
                {/* console.log(formState)  */}
                {/* this console.log will show every key stroke, only in name */}
            </form>
        </section>
    )
}

export default ContactForm;