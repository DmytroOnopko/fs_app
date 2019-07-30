import React from 'react'
import Main from './pages/Main/Main'
import Auth from './pages/Auth/Auth'
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import Profile from "./components/Profile/Profile";
import FilterAuth from "./components/FilterAuth/FilterAuth";


const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Auth}/>
                <Route  path='/login' component={Auth}/>
                <Route  path='/post' component={Main}/>
                <Route  path='/profile/:userId' component={Profile} />
                <Redirect from='*' to='/login'/>
            </Switch>
        </BrowserRouter>
    );
};

export default App;
