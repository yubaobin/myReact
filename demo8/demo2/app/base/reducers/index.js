import { combineReducers } from 'redux';
import CreateReducer from './CreateReducer'; 
import * as models from 'reducers';
const combine = combineReducers(models); 
export default combine;
