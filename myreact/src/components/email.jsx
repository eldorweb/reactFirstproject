import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
        .sendForm('service_k1z5u5a', 'template_2r3841s', form.current, {
        publicKey: 'oLl3hbJRyBTAt_9zV',
        })
        .then(
        () => {
            console.log('SUCCESS!');
            form.current.reset();
        },
        (error) => {
            console.log('FAILED...', error.text);
        },
        );
    };

    return (
    <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
    </form>
    );
};