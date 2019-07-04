import {combineReducers} from 'redux';
import data from './data.reducer'
import post from './post.reducer'
import user from './user.reducer'

const rootReducer = combineReducers({
    data,
    post,
    user,
});

export default rootReducer;