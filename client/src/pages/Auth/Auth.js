import React from 'react';
import Image from '../../components/Image/Image';
import SignUp from '../../components/SignUp/SignUp';
import {BrowserRouter, Route} from 'react-router-dom';
import './auth.scss';
import LogIn from "../../components/LogIn/LogIn";

const Auth = () => {
    return (
        <BrowserRouter>
            <section className="entry-section d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <Image/>
                        <Route exact path="/" component={SignUp}/>
                        <Route path="/login" component={LogIn}/>
                    </div>
                </div>
            </section>
        </BrowserRouter>
    );
};

export default Auth;
