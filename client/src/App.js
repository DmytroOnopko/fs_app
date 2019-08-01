import React, {Component} from 'react'
import Main from './pages/Main/Main'
import Auth from './pages/Auth/Auth'
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import Profile from "./components/Profile/Profile";
import {checkAuth} from "./action/user.action";
import {connect} from "react-redux";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

class App extends Component {

    componentDidMount() {
        this.axiosCheckToken();
    }

    axiosCheckToken = () => {
        this.props.checkAuth();
    };

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Auth}/>
                    <Route path='/login' component={Auth}/>
                    <Route path='/register' component={Auth}/>
                    <PrivateRoute path='/post' component={Main}/>
                    <PrivateRoute path='/profile/:userId' component={Profile}/>
                </Switch>
            </BrowserRouter>
        );
    }

    // render() {
    //     console.log(this);
    //     return (
    //         <BrowserRouter>
    //             <Switch>
    //                 <Route exact path='/' component={Auth}/>
    //                 <Route path='/login' component={Auth}/>
    //                 <Route path='/register' component={Auth}/>
    //                 <Route path='/post' component={Main}/>
    //                 <Route path='/profile/:userId' component={Profile}/>
    //                 <Redirect from='*' to='/login'/>
    //             </Switch>
    //         </BrowserRouter>
    //     )
    // }

    // handleAppRouter = () => {
    //     if (this.props.getToken.status === 200) {
    //         return (
    //             <>
    //                 <Route path='/post' component={Main}/>
    //                 <Route path='/profile/:userId' component={Profile}/>
    //             </>
    //         )
    //     } else {
    //         return (
    //             <>
    //                 <Route exact path='/' component={Auth}/>
    //                 <Route path='/login' component={Auth}/>
    //                 <Route path='/register' component={Auth}/>
    //             </>
    //         )
    //     }
    // };

    // render() {
    //     console.log(this);
    //     return (
    //         <BrowserRouter>
    //             <Switch>
    //                 {this.handleAppRouter()}
    //             </Switch>
    //         </BrowserRouter>
    //     )
    // }
}

const mapStateToProps = (store) => {
    return {getToken: store.user.get('getToken').toJS()}
};

const mapDispatchToProps = (dispatch) => {
    return {checkAuth: () => dispatch(checkAuth())};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);


