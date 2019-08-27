import React from 'react';
import './footer.scss';
const Footer = () => {

    return (
        <footer id="footer" className="footer">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="footer-content text-center">
                        <p>Check me out on Linkdn</p>
                        <p>Or download my CV</p>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.linkedin.com/in/joaquim-esteves">
                            <i className="lni-linkedin-original" /></a>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="_blank"><i className="lni-download"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}


export default Footer;