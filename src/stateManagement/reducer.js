import { combineReducers } from "redux";
import {ADD_CONTACT, REMOVE_CONTACT, CHANGE_INPUT_NAME, CHANGE_INPUT_PHONE, CHANGE_ERROR_NAME, CHANGE_ERROR_PHONE} from "./actions.js";

const contacts = (state = [], action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return [...state, action.newContact];
    case REMOVE_CONTACT:
      return [...state.filter(contact => contact.name !== action.contactName)];
    default:
      return state;
  };
};

const inputs = (state = {inputName: '', inputPhone: ''}, action) => {
  switch (action.type) {
    case CHANGE_INPUT_NAME:
      return {
        ...state,
        inputName: action.newInputName
      };
    case CHANGE_INPUT_PHONE:
      return {
        ...state,
        inputPhone: action.newInputPhone
      };
    default:
      return state;
  };
};

const errors = (state = {errorInputName: false, errorInputPhone: false}, action) => {
  switch (action.type) {
    case CHANGE_ERROR_NAME:
      return {
        ...state,
        errorInputName: !state.errorInputName
      };
    case CHANGE_ERROR_PHONE:
      return {
        ...state,
        errorInputPhone: !state.errorInputPhone
      };
    default:
      return state;
  };
};

const rootReducer = combineReducers({
  contacts,
  inputs,
  errors
});

export default rootReducer;