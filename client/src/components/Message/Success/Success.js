import React from 'react';
import './success.scss'
import {NavLink} from "react-router-dom";

const Success = () => {
    return (
        <div className="success p-4 rounded">
            <h2 className="success__title">Success</h2>
            <p className="success__text">User is added. Please follow to:</p>
            <NavLink to='/login' className="success__text success__text--bold">Log in</NavLink>
        </div>
    );
};

export default Success;