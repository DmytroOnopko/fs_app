import {combineReducers} from 'redux';
import data from './data.reducer'
import post from './post.reducer'

const rootReducer = combineReducers({
    data,
    post
});

export default rootReducer;