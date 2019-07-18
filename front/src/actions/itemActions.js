import axios from 'axios';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from './types';

export const getItems = () => dispatch => {
  dispatch(setItemsLoading());

  axios.get('http://localhost:8080/produit').then(res =>
    dispatch({
      type: GET_ITEMS,
      payload: res.data
    })
  );
};

// export function uploadFile(file) {

//   return dispatch => {
//     dispatch({ type: UPLOAD_REQUEST })

//     return request.post('http://localhost:8080/produit')
//       .attach('file', file, file.name)
//       .then(res => {
//         if (!res.ok) {
//           dispatch({ type: UPLOAD_FAILURE })
//           dispatch(showNotification({
//             status: 'err',
//             text: 'something going wrong',
//           }))
//         } else {
//           const data = JSON.parse(res.text)
//           dispatch({
//             type: UPLOAD_SUCCESS,
//             data,
//           })
//           dispatch(showNotification({
//             status: 'ok',
//             text: `File uploaded. Key: ${data.key}`,
//           }))
//         }
//       }, err => {
//         dispatch({ type: UPLOAD_FAILURE })
//         dispatch(showNotification({
//           status: 'err',
//           text: err.message,
//         }))
//       })
//   }
// }

export const addItem = item => dispatch => {
  axios.post('http://localhost:8080/produit', item).then(res =>{
    res.json().then((body) => {
      this.props.photo1 =`http://localhost:8080/produit/${body.photo1}`;
      console.log('sary',body.photo1);

    });
    dispatch({
      type: ADD_ITEM,
      payload: res.data
    })
  }
   
  );
};

export const deleteItem = id => dispatch => {
  axios.delete(`http://localhost:8080/produit/${id}`).then(res =>
    dispatch({
      type: DELETE_ITEM,
      payload: id
    })
  );
};

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  };
};