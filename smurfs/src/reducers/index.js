/*
  Be sure to import in all of the action types from `../actions`
*/
import { 
  SMURF_FETCH_BEGIN, 
  SMURF_FETCH_SUCCESS, 
  SMURF_FETCH_FAILURE,
  SMURF_ADD_BEGIN,
  SMURF_ADD_SUCCESS,
  SMURF_ADD_FAILURE 
} from "../actions";

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  error: null,
  addingSmurf: false
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export default function root(state = initialState, action) {
  switch(action.type) {
    case SMURF_FETCH_BEGIN:
      return {
        ...state,
        fetchingSmurfs: true
      };
    case SMURF_FETCH_SUCCESS:
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: [...state.smurfs, ...action.payload]
      };
    case SMURF_FETCH_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case SMURF_ADD_BEGIN:
      return {
        ...state
      };
    case SMURF_ADD_SUCCESS:
      return {
        ...state,
        addingSmurf: true,
        smurfs: [...action.payload]
      };
    case SMURF_ADD_FAILURE:
      return {
        ...state,
        addingSmurf: false,
        error: action.payload
      };
    default:
      return state;
  }
}
