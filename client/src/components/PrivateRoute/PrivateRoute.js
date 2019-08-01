import React from 'react';
import { connect } from "react-redux";
import {Redirect, Route} from "react-router-dom";

const PrivateRoute = ({ component: Component, getToken, ...rest }) => {
    return (
        <Route {...rest} render={props => {
            if(Object.keys(getToken).length && getToken.status === 200){
                return <Component {...props}/>
            } else {
                return <Redirect to="/login"/>
            }
        }}/>
    );
};

const mapStateToProps = store => ({
    getToken : store.user.get("getToken").toJS()
});

export default connect(mapStateToProps)(PrivateRoute);