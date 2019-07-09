const axios = require('axios');
const url = 'http://localhost:3001';

export const GET_USER_LOADING = 'GET_USER_LOADING';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_ERROR = 'GET_USER_ERROR';

export const CREATE_USER = 'CREATE_USER';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_ERROR = 'CREATE_USER_ERROR';
//
// export const getUserFromDb = () => {
//     return dispatch => {
//         dispatch({
//             type: GET_USER_LOADING
//         });
//         axios
//             .get(url + '/user')
//             .then(({data}) => {
//                 console.log(data);
//                 dispatch({
//                     type: GET_USER_SUCCESS,
//                     payload: data
//                 })
//             })
//             .catch(err => {
//                 dispatch({
//                     type: GET_USER_ERROR
//                 })
//             })
//     }
// };

export const addUserToDb =  (name, surname, email, login, password, img_url, subscribers_id, subscribed_to_id, posts) =>{
    return dispatch => {
        const user = {
            name: name,
            surname: surname,
            email: email,
            login: login,
            password: password,
            img_url: img_url,
            subscribers_id: subscribers_id,
            subscribed_to_id: subscribed_to_id,
            posts: posts
        };
        dispatch({
            type: CREATE_USER,
        });
        axios
            .post(url + '/api/user', {user})
            .then(data => {
                console.log(data);
                dispatch({
                    type: CREATE_USER_SUCCESS
                });
            })
            .catch(err => {
                dispatch({
                    type: CREATE_USER_ERROR
                })
            })
    }
};