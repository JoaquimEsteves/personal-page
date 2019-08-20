import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './footer.scss';
const Footer = () => {

    return (
        <footer id="footer" className="footer-area">
            <div className="footer-widget">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="footer-content text-center">
                            {/* <ul> */}
                                {/* <li> */}
                                    <p>
                                        Check me out on Linkdn
                                        </p>
                                    <p>Or download my CV</p>
                                    <a href="_blank"><i className="lni-linkedin-original" /></a>
                                    <a href="_blank"><i className="lni-download"></i></a>
                                {/* </li> */}
                            {/* </ul> */}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}


export default React.memo(Footer);