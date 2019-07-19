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

export const addItem =  item => dispatch =>   (newProject) => {
  const data = new FormData();
    data.append('photo1', newProject.files[0]);
    data.append('nom',newProject.nom);
    data.append('article',newProject.article);
    data.append('prix',newProject.prix)
  
  return axios.post(`http://localhost:8080/produit`,item, data, {
    headers: {
      'Content-Type': 'multipart/data',
    },
  }).then(res =>{
         dispatch({
           type: ADD_ITEM,
           payload: res.data
       })
  });
};

// export const addItem = item => dispatch => {
//   axios.post('http://localhost:8080/produit', item).then(res =>{
//     dispatch({
//       type: ADD_ITEM,
//       payload: res.data
//     })
//   }
   
//   );
// };

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