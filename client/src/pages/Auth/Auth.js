import React from 'react';
import Image from '../../components/Image/Image';
import SignUp from '../../components/SignUp/SignUp';
import {withRouter} from 'react-router-dom';
import './auth.scss';
import LogIn from "../../components/LogIn/LogIn";

const Auth = (props) => {
    return (
        <section className="entry-section d-flex align-items-center">
            <div className="container">
                <div className="row">
                    <Image/>
                    {props.location.pathname === '/login' ? <LogIn/> : <SignUp/>}
                </div>
            </div>
        </section>
    );
};

export default withRouter(Auth);
