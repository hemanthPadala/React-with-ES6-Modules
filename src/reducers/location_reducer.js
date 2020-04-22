import { FETCH_LOCATIONS } from '../actions';
import _ from 'lodash';

export default function (state={}, action){
  switch(action.type) {
    case FETCH_LOCATIONS:
    return _.mapKeys(action.payload.data, 'city');
    default:
    return state;
  }
}
