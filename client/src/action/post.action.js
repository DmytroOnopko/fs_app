const instanceAxios = require('./axios/instanceAxios');

export const GET_POST_LOADING = 'GET_POST_LOADING';
export const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
export const GET_POST_ERROR = 'GET_POST_ERROR';

export const getPostFromDb = () => {

    const config = {headers: {'Authorization' : window.localStorage.getItem('token')}}; // спросить instanceAxios

    return dispatch => {
        dispatch({
            type: GET_POST_LOADING
        });
        instanceAxios
            .get('/post', config)
            .then(({data}) => {
                console.log(data)
                dispatch({
                    type: GET_POST_SUCCESS,
                    payload: data
                })
            })
            .catch(err => {
                dispatch({
                    type: GET_POST_ERROR,
                    payload: err.response
                })
            })
    }
};