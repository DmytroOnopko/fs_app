import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import Test from './Test'
import {Provider} from 'react-redux';
import store from './store/index.store';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={store}>
        {/*<App />*/}
        <Test/>
    </Provider>,
    document.getElementById('root'));

serviceWorker.unregister();
