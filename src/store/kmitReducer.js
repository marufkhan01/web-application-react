import {GET_DATA_FULFILLED, GET_DATA_PENDING} from "../actionType/actionType.js";
const initialState = {
  isLoading: false,
  entries: {},
  content: []
};
const kmitsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_PENDING:
      return {
        isLoading: true,
        content: []
      };
    case GET_DATA_FULFILLED:
      return {
        isLoading: false,
        content: action.payload,
        entries: action.payload,
        test:"testing"
      };
    default:
      return state;
  }
};
export default kmitsReducer;
