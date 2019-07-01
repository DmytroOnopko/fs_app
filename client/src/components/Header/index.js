import React from 'react';
import logo from './img/logo.svg.png'
import './header.scss'

const Header = (props) => {
    return (
        <header className="header">
            <div className="header-container--pd container d-flex justify-content-between">
                <a href="#" className="header-logo d-flex align-items-center">
                    <i className="header-logo__i fab fa-instagram fa-2x"/>
                    <img className="header-logo__img header-logo__img--size" src={logo} alt="logo"/>
                </a>
                <div className="header-actions d-flex align-items-center">
                    <i className="header-actions__i far fa-plus-square fa-lg"/>
                    <i className="header-actions__i far fa-user fa-lg ml-4"/>
                </div>
            </div>
        </header>
    );
};

export default Header;
