const axios = require('axios');
const url = 'http://localhost:3001';

export const GET_USER_LOADING = 'GET_USER_LOADING';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_ERROR = 'GET_USER_ERROR';

export const getUserFromDb = () => {
    return dispatch => {
        dispatch({
            type: GET_USER_LOADING
        });
        axios
            .get(url + '/user')
            .then(({data}) => {
                console.log(data);
                dispatch({
                    type: GET_USER_SUCCESS,
                    payload: data
                })
            })
            .catch(err => {
                dispatch({
                    type: GET_USER_ERROR
                })
            })
    }
};