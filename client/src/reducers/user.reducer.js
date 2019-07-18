import { fromJS } from 'immutable';
import {CREATE_USER_SUCCESS, CREATE_USER_ERROR, GET_USER_SUCCESS, GET_USER_LOADING} from "../action/user.action";

const initialState = fromJS({
    dataDb: {},
    isLoading: false

});

const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_USER_LOADING:
            return state
                .set('isLoading', true);
        case GET_USER_SUCCESS:
            return state
                .set('isLoading', false)
                .set('dataDb', fromJS(action.payload));
        case CREATE_USER_SUCCESS:
            return state
                .set('dataDb', fromJS(action.payload));
        case CREATE_USER_ERROR:
            return state
                .set('dataDb', fromJS(action.payload));
        default:
            return state;
    }
};

export default userReducer;
