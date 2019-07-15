import React from 'react'
import Main from './pages/Main/Main'
import Auth from './pages/Auth/Auth'
import {BrowserRouter, Route} from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
            <Route exact path='/' component={Auth}/>
            <Route path='/post' component={Main}/>
        </BrowserRouter>
    );
};

export default App;