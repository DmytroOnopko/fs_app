import { fromJS } from 'immutable';
import {CREATE_USER_SUCCESS, CREATE_USER_ERROR} from "../action/user.action";

const initialState = fromJS({
    dataDb: {},

});

const userReducer = (state = initialState, action) => {
    switch (action.type) {
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
