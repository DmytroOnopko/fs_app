import { fromJS } from 'immutable';
import {GET_POST_LOADING, GET_POST_SUCCESS, GET_POST_ERROR} from "../action/post.action";

const initialState = fromJS({
    post: [],
    isLoading: false
});

export default function postReducer(state = initialState, action) {
    switch (action.type) {
        case GET_POST_LOADING:
            return state
                .set('isLoading', true);
        case GET_POST_SUCCESS:
            return state
                .set('isLoading', false)
                .set('post', fromJS(action.payload));
        case GET_POST_ERROR:
            return state
                .set('isLoading', false);
        default:
            return state;
    }
}