const axios = require('axios');
const url = 'http://localhost:3001';

export const GET_POST_LOADING = 'GET_POST_LOADING';
export const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
export const GET_POST_ERROR = 'GET_POST_ERROR';

export const getPostFromDb = () => {
    return dispatch => {
        dispatch({
            type: GET_POST_LOADING
        });
        axios
            .get(url + '/post')
            .then(({data}) => {
                dispatch({
                    type: GET_POST_SUCCESS,
                    payload: data
                })
            })
            .catch(err => {
                dispatch({
                    type: GET_POST_ERROR
                })
            })
    }
};