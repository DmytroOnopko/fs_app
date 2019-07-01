const axios = require('axios');
const api = 'http://localhost:3001/api';

export const GET_POST_LOADING = 'GET_POST_LOADING';
export const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
export const GET_POST_ERROR = 'GET_POST_ERROR';

export const getPostFromDb = () => {
    return dispatch => {
        dispatch({
            type: GET_POST_LOADING
        });
        // debugger;
        fetch(api + '/post')
            .then(res => res.json())
            .then(post => {
                console.log("post: ", post);
                dispatch({
                    type: GET_POST_SUCCESS,
                    payload: post.post
                })
            })
            .catch(err => {
                dispatch({
                    type: GET_POST_ERROR
                })
            })
    }
};