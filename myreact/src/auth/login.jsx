import React from 'react'
import { ContainerLogin } from '../style/loginstyle'
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';

const LoginComp = () => {
    const form = useRef();
    const sendEmail = (e) => {
    e.preventDefault();
    emailjs
        .sendForm('service_k1z5u5a', 'template_2r3841s', form.current, {
        publicKey: 'oLl3hbJRyBTAt_9zV',
        })
        .then(
        () => {
            alert('SUCCESS!');
            form.current.reset();
        },
        (error) => {
            alert('FAILED...', error.text);
        },
        );
    };

    return (
        <ContainerLogin>
        <div className='login'>
    <h1>Contact Us</h1>
    <p className='text'>We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
    <form ref={form} onSubmit={sendEmail}>
    <div className='name_emailDiv'>
        <div className='nameDiv'>
            <label>Name</label>
            <input type="text" name="user_name" required placeholder='Enter your name' style={{textTransform:'uppercase'}} autoSave=''/>
        </div>
        <div className='emailDiv'>
            <label>Email</label>
            <input type="email" name="user_email" required placeholder='Enter your email adresss' autoComplete='on' autoSave='on' autoCorrect='on'/>
        </div>
    </div>
    
    <div className='subject'>
        <label>Subject</label>
        <input type="text" name="user_subject" placeholder='Write a subject' required/>
    </div>
    <div className='messageDiv'>
        <label>Message</label>
        <textarea name="message" placeholder='Write your messae' required/>
    </div>
        <input type="submit" value="Send" className='submit'/>
    </form>
    <div className='callUs'>
        <div className='first'>
            <h3>Call Us:</h3>
            <p>+1-234-567-8900</p>
        </div>
        <div className='second'>
            <h3>Hours:</h3>
            <p>
            Mon-Fri: 11am - 8pm <br/>Sat, Sun: 9am - 10pm
            </p>
        </div>
        <div className='third'>
            <h3>Our Location:</h3>
            <p>123 Bridge Street<br />
            Nowhere Land, LA 12345  <br />
            United States</p>
        </div>
    </div>
    </div>
    </ContainerLogin>
    );
}

export default LoginComp