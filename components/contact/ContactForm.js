import { useRef } from 'react';

import styles from './ContactForm.module.css';

function ContactForm () {
    const emailRef = useRef();
    const nameRef = useRef();
    const messageRef = useRef();

    const sendMessageHandler = (e) => {
        e.preventDefault();

        const data = {
            email: emailRef.current.value,
            name: nameRef.current.value,
            message: nameRef.current.value,
        }

        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
    }

    return (
        <section className={styles.contact}>
            <h1>How can I help you? </h1>
            <form className={styles.form} onSubmit={sendMessageHandler}>
                <div className={styles.controls}>
                    <div className={styles.control}>
                        <label htmlFor='email'>Your email</label>
                        <input ref={emailRef} type='email' id='email' required />
                    </div>
                    <div className={styles.control}>
                        <label htmlFor='name'>Your name</label>
                        <input ref={nameRef} type='text' id='name' required />
                    </div>
                </div>
                <div className={styles.control}>
                    <label htmlFor='message'>Your message</label>
                    <textarea ref={messageRef} id='message' rows='5' required />
                </div>
                <div className={styles.actions}>
                    <button>Send message</button>
                </div>
            </form>
        </section>    )
}

export default ContactForm;
