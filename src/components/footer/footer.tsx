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
                        <a href="_blank"><i className="lni-linkedin-original" /></a>
                        <a href="_blank"><i className="lni-download"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}


export default React.memo(Footer);