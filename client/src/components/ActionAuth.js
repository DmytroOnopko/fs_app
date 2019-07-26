import React from 'react';
import {NavLink} from "react-router-dom";

function ActionAuth(props) {
    return (
        <>
            <button type="submit" className="form-wrap__button btn btn-primary btn-lg btn-block">{props.buttonText}</button>

            <span className="form-wrap__divider my-3">or</span>

            <NavLink to={props.link} className="form-wrap__link btn btn-secondary btn-lg btn-block"
                     role="button" aria-pressed="true"
            onClick={props.onClickSignUp && props.onClickLogIn}>{props.linkText}</NavLink>
        </>
    );
}

export default ActionAuth;