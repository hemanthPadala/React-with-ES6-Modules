import { combineReducers } from 'redux';
import LocationReducer from './location_reducer';


export default combineReducers({
  locations: LocationReducer
});
