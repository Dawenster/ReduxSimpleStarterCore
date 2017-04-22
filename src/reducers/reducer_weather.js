import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
  case FETCH_WEATHER:
    // Don't mutate state - return new instance of state
    // return state.concat([action.payload.data]); --> Same as below
    return [ action.payload.data, ...state ]; // returns [ city, city] NOT [ city, [ city ] ]
  }
  return state
}