import React,  { useState } from 'react'

const ContactForm = () => {
    const [nameInput, setNameInput] =  useState('');
    const [emailInput, setEmailInput] =  useState('');
    const [messageInput, setMessageInput] =  useState('');
    const [formError, setFormError] =  useState(false);

    const checkRequired = (name, email, message) => {
        if(name && email && message){
            return;
        };

        return true;
    };

    const setDefault = () => {
        setFormError(false);
        setNameInput('');
        setEmailInput('');
        setMessageInput('');
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const error = checkRequired(nameInput, emailInput, messageInput)

        if(error){
            setFormError(true);
            return;
        }

        //Emailer action fired here
        console.log({nameInput, emailInput, messageInput});

        setDefault();
    };

    return (
        <form>
            {formError && <span>Please add all the required fields</span>}
            <label>
                <span>Name</span>
                <input onChange={(e)=> setNameInput(e.target.value)} required type={"text"} value={nameInput}/>
            </label>
            <label>
                <span>Email</span>
                <input onChange={(e)=> setEmailInput(e.target.value)} required  type={"email"} value={emailInput}/>
            </label>
            <label>
                <span>Message</span>
                <input onChange={(e)=> setMessageInput(e.target.value)} required type={"text"} value={messageInput}/>
            </label>
            <button onClick={(e)=> handleSubmit(e)}>Submit</button>
        </form>
    )
}

export default ContactForm;