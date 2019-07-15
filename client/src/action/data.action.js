const axios = require('axios');
const api = 'http://localhost:3001/api';

export const GET_DATA_LOADING = 'GET_DATA_LOADING';
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
export const GET_DATA_ERROR = 'GET_DATA_ERROR';

export const getDataFromDb = () => {
    return (dispatch) =>{
        dispatch({
            type: GET_DATA_LOADING
        });
        axios
            .get(api + '/getData')
            .then(({data}) => {
                dispatch({
                    type: GET_DATA_SUCCESS,
                    payload: data.data
                });
            })
            .catch(err => {
                dispatch({
                    type: GET_DATA_ERROR
                })
            })
    }
};

// export const putDataToDB = (message) => {
//     let currentIds = this.state.data.map((data) => data.id);
//     let idToBeAdded = 0;
//     while (currentIds.includes(idToBeAdded)) {
//         ++idToBeAdded;
//     }
//
//     axios
//         .post('http://localhost:3001/api/putData', {
//         id: idToBeAdded,
//         message: message,
//     });
// };
//
//
// export const deleteFromDB = (idTodelete) => {
//     parseInt(idTodelete);
//     let objIdToDelete = null;
//     this.state.data.forEach((dat) => {
//         if (dat.id === idTodelete) {
//             objIdToDelete = dat._id;
//         }
//     });
//
//     axios
//         .delete('http://localhost:3001/api/deleteData', {
//         data: {
//             id: objIdToDelete,
//         },
//     });
// };
//
// export const updateDB = (idToUpdate, updateToApply) => {
//     let objIdToUpdate = null;
//     parseInt(idToUpdate);
//     this.state.data.forEach((dat) => {
//         if (dat.id === idToUpdate) {
//             objIdToUpdate = dat._id;
//         }
//     });
//
//     axios
//         .put('http://localhost:3001/api/updateData', {
//         id: objIdToUpdate,
//         update: { message: updateToApply },
//     });
// };