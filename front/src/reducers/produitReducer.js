import {
    GET_PRODUITS,
    ADD_PRODUIT,
    DELETE_PRODUIT,
    PRODUITS_LOADING
  } from '../actions/types';
  
  const initialState = {
    items: [],
    loading: false
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_PRODUITS:
        return {
          ...state,
          produits: action.payload,
          loading: false
        };
  
      case DELETE_PRODUIT:
        return {
          ...state,
          produits: state.produits.filter(produit => produit._id !== action.payload)
        };
  
      case ADD_PRODUIT:
        return {
          ...state,
          produits: [action.payload, ...state.produits]
        };
  
      case PRODUITS_LOADING:
        return {
          ...state,
          loading: true
        };
  
      default:
        return state;
    }
  }