import React from 'react'
import './header.scss';
// import picture_of_me from '../../img/me_512.png';

const Header = () => {
    return (
        <header id="home" className="header-area">
            <div className="navigation fixed-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <nav className="navbar-expand-lg">
                                {/* ADD LOGO HERE YO <a className="navbar-brand" href="index.html">
                                    <img src="" alt="Logo aqui" />
                                </a> */}

                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-auto">
                                        <li><a href="#home">Home</a></li>
                                        <li><a href="#about">About</a></li>
                                        <li><a href="#work">Experience</a></li>
                                        <li><a href="#contact">Contact</a></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            <div className="header-content d-flex align-items-center">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-5 col-lg-6">
                            <h1 className="title">Joaquim Esteves</h1>
                            <p>Computer Software Engineer</p>
                        </div>
                        <div className="col-6 offset-xl-1 mt-10">
                            <div className="image_of_me" title="me, looking all handsome"/>
                        </div>
                    </div>
                </div>
            </div>
        </header >
    );
}

export default Header;