import { ADD_SERVICE, CHANGE_EDIT_ID, CHANGE_SERVICE_FIELD, CLEAR_SERVICE_FIELDS } from "../actions/actionType";

const initialState = {
    name: '',
    price: '',
    editId: null
  };
  
  export default function serviceAddReducer(state = initialState, action) {
    switch (action.type) {
      case CHANGE_SERVICE_FIELD:
        const {name, value} = action.payload;
        return {...state, [name]: value};
      case ADD_SERVICE:
      case CLEAR_SERVICE_FIELDS:
        return {...initialState};
      case CHANGE_EDIT_ID:
        const {editId} = action.payload;
        return {...state, editId}
      default:
        return state;
    }
  }