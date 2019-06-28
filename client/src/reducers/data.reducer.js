import { fromJS } from 'immutable';
import {GET_DATA_LOADING, GET_DATA_SUCCESS, GET_DATA_ERROR} from '../action/data.action';

const initialState = fromJS({
    data: [],
    isLoading: false
});

export default function dataReducer(state = initialState, action){
    switch (action.type) {
        case GET_DATA_LOADING:
            return state
                .set('isLoading', true);
        case GET_DATA_SUCCESS:
            return state
                .set('isLoading', false)
                .set('data', fromJS(action.payload));
        case GET_DATA_ERROR:
            return state
                .set('isLoading', false);
        default:
            return state;
    }
};

