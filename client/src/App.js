import React from 'react'
import Main from './pages/Main/Main'
import Auth from './pages/Auth/Auth'
import {BrowserRouter, Route} from 'react-router-dom';
import Profile from "./components/Profile/Profile";


const App = () => {
    return (
        <>
            <BrowserRouter>
                <Route exact path='/' component={Auth}/>
                <Route path='/login' component={Auth}/>
                <Route path='/post' component={Main}/>
                <Route path='/profile/:userId' component={Profile} />
            </BrowserRouter>
        </>
    );
};

export default App;
