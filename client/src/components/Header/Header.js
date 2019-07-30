import React, {Component} from 'react';
import logo from './img/logo.svg.png'
import './header.scss'
import { Link } from 'react-router-dom'

class Header extends Component{

    state = {
        show: false,
    };

    onClickModal = () =>{
        let newState = {...this.state};
        newState.show = true;
        this.setState(newState);
    };

    render() {
        return (
            <>
                <header className="header">
                    <div className="header-container--pd container d-flex justify-content-between">
                        <Link to="/post" className="header-logo d-flex align-items-center">
                            <i className="header-logo__i fab fa-instagram fa-2x"/>
                            <img className="header-logo__img header-logo__img--size" src={logo} alt="logo"/>
                        </Link>
                        <div className="header-actions d-flex align-items-center">
                            <button type="button" className="btn" data-toggle="modal" data-target="#exampleModalCenter"
                                    onClick={this.onClickModal}>
                                <i className="header-actions__i far fa-plus-square fa-lg"/>
                            </button>
                            <i className="header-actions__i far fa-user fa-lg ml-4"/>
                        </div>
                    </div>
                </header>
            </>
        );
    }
};

export default Header;
