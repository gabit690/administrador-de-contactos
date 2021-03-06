import {ADD_CONTACT, REMOVE_CONTACT, CHANGE_INPUT_NAME, CHANGE_INPUT_PHONE, CHANGE_ERROR_NAME, CHANGE_ERROR_PHONE} from "./actions.js";

const addContact = (newContact) => {
  return {
    type: ADD_CONTACT,
    newContact
  };
};

const removeContact = (contactName) => {
  return {
    type: REMOVE_CONTACT,
    contactName
  };
};

const changeInputName = (newInputName) => {
  return {
    type: CHANGE_INPUT_NAME,
    newInputName
  };
};

const changeInputPhone = (newInputPhone) => {
  return {
    type: CHANGE_INPUT_PHONE,
    newInputPhone
  };
};

const changeErrorName = () => {
  return {
    type: CHANGE_ERROR_NAME,
  };
};

const changeErrorPhone = () => {
  return {
    type: CHANGE_ERROR_PHONE,
  };
};

export {addContact, removeContact, changeInputName, changeInputPhone, changeErrorName, changeErrorPhone};