import React, { useState, useEffect } from 'react'
import './header.scss';
import $ from 'jquery';

const hasWebP = (function () {
    // some small (2x1 px) test image
    const image = "data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACyAgCdASoCAAEALmk0mk0iIiIiIgBoSygABc6zbAAA/v56QAAAAA==";

    return function () {
        var deferred = $.Deferred();

        $("<img>").on("load", function () {
            let self = this as HTMLImageElement;
            if (self.width === 2 && self.height === 1) {
                deferred.resolve();
            } else {
                deferred.reject();
            }
        }).on("error", function () {
            deferred.reject();
        }).attr("src", image);

        return deferred.promise();
    }
})();

const Header = () => {
    const [useWb, setUseWb] = useState(true)
    useEffect(() => {
        hasWebP().then(() => (setUseWb(true)), () => (setUseWb(false)));
        
    });
    let image_class = "image_of_me_webp";;
    if (useWb === false) {
        image_class = 'image_of_me_no_webp'
    }
    return (
        <header id="home" className="header-area">
            <div className="navigation fixed-top">

                <nav className="navbar-expand-lg">
                    {/* ADD LOGO HERE YO <a className="navbar-brand" href="index.html">
                                    <img src="" alt="Logo aqui" />
                                </a> */}

                    <ul className="navbar-nav">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#work">Experience</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>

            </div>

            <div className="header-content d-flex align-items-center">
                <div className="container">
                    <div className="row align-items-center">
                        <div className=" col-lg-6">
                            <h1 className="title">Joaquim Esteves</h1>
                            <p>Computer Software Engineer</p>
                        </div>
                        <div className="col-xl-5 col-lg-6">
                            <div className={image_class} title="me, looking all handsome" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;