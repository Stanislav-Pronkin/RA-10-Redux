import shortid from 'shortid';
import { ADD_SERVICE, CHANGE_SERVICE_FIELD, REMOVE_SERVICE } from '../actions/actionType';

const initialState = {
  data: [
  { id: shortid.generate(), name: 'Замена стекла', price: 21000 },
  { id: shortid.generate(), name: 'Замена дисплея', price: 25000 },
],
filter: ""
}

export default function serviceListReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SERVICE:
      const { name, price } = action.payload;
      return {data: [...state.data, { id: shortid.generate(), name, price: Number(price) }]};
    case REMOVE_SERVICE:
      const { id } = action.payload;
      const newState = state.data.filter(service => service.id !== id);
      return {data: newState};
    case CHANGE_SERVICE_FIELD:
      return { 
        ...state,
        filter: action.payload.value
      }
    default:
      return state;
  }
}