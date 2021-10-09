import React, { useState } from "react";

function ContactForm() {    
    
    const [formState, setFormState] = useState({ name: '', email: '', message: ''});
    const { name, email, message } = formState;

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    function handleChange(e) {
        setFormState({...formState, name: e.target.value})
    
        setFormState({...formState, [e.target.name]: e.target.value })
    }
    // console.log(formState)

    return (
        <section>
            <h1>Contact Me</h1>
            <form id='contact-form' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' defaultValue={formState.name} onChange={handleChange} name='name' />
                </div>
                <div>
                    <label htmlFor='email' name='email'>Email address:</label>
                    <input type='email' defaultValue={formState.email} onChange={handleChange} name='email' />
                </div>
                <div>
                    <label htmlFor='message'>Message:</label>
                    <textarea name='message' defaultValue={formState.message} onChange={handleChange} rows='5' />
                </div>

                <button type='submit'>Submit:</button>
                {/* console.log(formState)  */}
                {/* this console.log will show every key stroke, only in name */}
            </form>
        </section>
    )
}

export default ContactForm;