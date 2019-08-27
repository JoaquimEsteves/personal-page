import React from 'react'
import './contact.scss';

// A big thank you to formspree for allowing easy as pie emailing :)
class Contact extends React.Component {
    render() {
        return (
            <section id="contact">
                <form action="https://formspree.io/joaquimbve@hotmail.com" method="POST">
                    <div className="contact-form">
                        <input type="text" name="header" placeholder="Header" required/>
                    </div>
                    <div className="contact-form">
                        <input type="email" name="email" placeholder="Your e-mail" required/>
                    </div>
                    <div className="contact-form">
                        <textarea name="message" placeholder="Message" required></textarea>
                    </div>
                    <p className="form-message"></p>
                    <div className="contact-form">
                        <button className="btn-lg round" type="submit">Send me an e-mail!</button>
                    </div>
                </form>
            </section>
        );
    }
}

export default Contact;