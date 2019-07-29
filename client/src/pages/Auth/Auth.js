import React from 'react';
import Image from '../../components/Image/Image';
import SignUp from '../../components/SignUp/SignUp';
import {Route, Switch} from 'react-router-dom';
import './auth.scss';
import LogIn from "../../components/LogIn/LogIn";

const Auth = (props) => {
    console.log('Auth', props);
    return (
        <section className="entry-section d-flex align-items-center">
            <div className="container">
                <div className="row">
                    <Image/>
                    <Switch>
                        <Route exact path="/" component={SignUp}/>
                        <Route path="/login" component={LogIn}/>
                    </Switch>
                </div>
            </div>
        </section>
    );
};

export default Auth;
