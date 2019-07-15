import {combineReducers} from 'redux';
import post from './post.reducer'
import user from './user.reducer'

const rootReducer = combineReducers({
    post,
    user,
});

export default rootReducer;