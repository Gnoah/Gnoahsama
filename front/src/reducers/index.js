import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import produitReducer from './produitReducer';

export default combineReducers({
    errors: errorReducer,
    auth: authReducer,
    produit: produitReducer
});