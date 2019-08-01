const instanceAxios = require('./axios/instanceAxios');

export const GET_USER_LOADING = 'GET_USER_LOADING';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_ERROR = 'GET_USER_ERROR';

export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_ERROR = 'CREATE_USER_ERROR';

export const CHECK_USER_SUCCESS = 'CHECK_USER_SUCCESS';
export const CHECK_USER_ERROR = 'CHECK_USER_ERROR';

export const GET_TOKEN_SUCCESS = 'GET_TOKEN_SUCCESS';
export const GET_TOKEN_ERROR = 'GET_TOKEN_ERROR';

export const getUser = (userId) => {
    return dispatch => {
        dispatch({
            type: GET_USER_LOADING
        });
        instanceAxios
            .get('/api/user', {
                params: {
                    ID: userId
                }
            })
            .then(({data}) => {
                dispatch({
                    type: GET_USER_SUCCESS,
                    payload: data
                })
            })
            .catch(err => {
                dispatch({
                    type: GET_USER_ERROR,
                    payload: err.response
                })
            })
    }
};

export const login = (user) => {
    return dispatch => {
        return instanceAxios
          .post('/api/login', user)
          .then(data => {
              dispatch({
                  type: CHECK_USER_SUCCESS,
                  payload: data
              })
          })
          .catch(err => {
              dispatch({
                  type: CHECK_USER_ERROR,
                  payload: err.response,
              })
          })
  }
};

export const register = (user) =>{
    return dispatch => {
        instanceAxios
            .post('/api/user/register', user)
            .then(data => {
                dispatch({
                    type: CREATE_USER_SUCCESS,
                    payload: data
                });
            })
            .catch(err => {
                dispatch({
                    type: CREATE_USER_ERROR,
                    payload: err.response
                })
            })
    }
};

export const checkAuth = () => {

    return dispatch => {
        instanceAxios
            .post('/api/user/check-token')
            .then(data =>{
                console.log(data);
                dispatch({
                    type: GET_TOKEN_SUCCESS,
                    payload: data
                })
            })
            .catch(err => {
                dispatch({
                    type: GET_TOKEN_ERROR,
                    payload: err.response
                })
            })
    }
};
