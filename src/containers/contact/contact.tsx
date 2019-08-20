import React from 'react'
import './contact.scss';

class Contact extends React.Component {
    render() {
        return (
            <div id="contact">
                <form id="contact-me-form">
                    <div className="contact-form">
                        <input type="text" name="header" placeholder="Header" />
                    </div>
                    <div className="contact-form">
                        <input type="email" name="email" placeholder="Email" />
                    </div>
                    <div className="contact-form">
                        <textarea name="message" placeholder="Message"></textarea>
                    </div>
                    <p className="form-message"></p>
                    <div className="contact-form">
                        <button className="btn-lg round" type="submit">Send me an e-mail!</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Contact;