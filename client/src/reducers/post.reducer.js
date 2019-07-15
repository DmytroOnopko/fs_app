import { fromJS } from 'immutable';
import {GET_POST_LOADING, GET_POST_SUCCESS, GET_POST_ERROR} from '../action/post.action';

const initialState = fromJS({
    items: [],
    isLoading: false
});

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POST_LOADING:
            return state
                .set('isLoading', true);
        case GET_POST_SUCCESS:
            return state
                .set('isLoading', false)
                .set('items', fromJS(action.payload));
        case GET_POST_ERROR:
            return state
                .set('isLoading', false);
        default:
            return state;
    }
};

export default postReducer;