import React from 'react'
import './header.scss';

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
                                        <li className="nav-item"><a className="page-scroll" href="#home">Home</a></li>
                                        <li className="nav-item"><a className="page-scroll" href="#about">About</a></li>
                                        <li className="nav-item"><a className="page-scroll" href="#work">Experience</a></li>
                                        <li className="nav-item"><a className="page-scroll" href="#contact">Contact</a></li>
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
                            <h4 className="sub-title">Computer Software Engineer</h4>
                            <h1 className="title">Joaquim Esteves</h1>
                            <p>Computer Software Engineer</p>
                        </div>
                        <div className="col-lg-6 offset-xl-1">
                            <img src="" alt="Sou eu!" />
                        </div>
                    </div>
                </div>
            </div>
        </header >
    );
}

export default Header;