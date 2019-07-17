import axios from 'axios';
import { GET_ERRORS, SET_CURRENT_USER, GET_PRODUITS, ADD_PRODUIT, DELETE_PRODUIT, PRODUITS_LOADING } from './types';
import setAuthToken from '../setAuthToken';
import jwt_decode from 'jwt-decode';

export const registerUser = (user, history) => dispatch => {
    axios.post('http://localhost:8080/register', user)
            .then(res => history.push('/login'))
            .catch(err => {
                console.log(err);
                
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                });
            });
}

export const loginUser = (user) => dispatch => {
    axios.post('http://localhost:8080/login', user)
            .then(res => {
                const { token } = res.data;
                localStorage.setItem('jwtToken', token);
                setAuthToken(token);
                const decoded = jwt_decode(token);
                dispatch(setCurrentUser(decoded));
            })
            .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                });
            });
}

export const getProduits = () => dispatch => {
    dispatch(setProduitsLoading());
    axios.get('http://localhost:8080/produit').then(res =>
      dispatch({
        type: GET_PRODUITS,
        payload: res.data
      })
    );
  };

  export const addProduit = item => dispatch => {
    axios.post('http://localhost:8080/produit', item).then(res =>
      dispatch({
        type: ADD_PRODUIT,
        payload: res.data
      })
    );
  };

  export const deleteProduit = id => dispatch => {
    axios.delete(`http://localhost:8080/produit/${id}`).then(res =>
      dispatch({
        type: DELETE_PRODUIT,
        payload: id
      })
    );
  };

  export const setProduitsLoading = () => {
    return {
      type: PRODUITS_LOADING
    };
  };
  

export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}

export const logoutUser = (history) => dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    dispatch(setCurrentUser({}));
    history.push('/login');
}