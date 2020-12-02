import {ADD_CONTACT, REMOVE_CONTACT, CHANGE_INPUT_NAME, CHANGE_INPUT_PHONE, CHANGE_ERROR_NAME, CHANGE_ERROR_PHONE} from "./actions.js";

const initialState = {
  contacts: [],
  inputName: '',
  inputPhone: '',
  errorInputName: false,
  errorInputPhone: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.newContact]
      };
    case REMOVE_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts.filter(contact => contact.name !== action.contactName)]
      };
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

export default reducer;