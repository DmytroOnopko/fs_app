import { fromJS } from 'immutable';
import {GET_USER_LOADING, GET_USER_SUCCESS, GET_USER_ERROR} from "../action/user.action";

const initialState = fromJS({
    items: [],
    isLoading: false
});

export default function postReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_LOADING:
            return state
                .set('isLoading', true);
        case GET_USER_SUCCESS:
            return state
                .set('isLoading', false)
                .set('items', fromJS(action.payload));
        case GET_USER_ERROR:
            return state
                .set('isLoading', false);
        default:
            return state;
    }
}