import { connect } from "react-redux";
import {addContact, changeInputName, changeInputPhone, changeErrorName, changeErrorPhone} from "./creators"
import AddContactForm from "../components/AddContactForm/AddContactForm";

const mapStateToProps = (state) => {
  return ({
    contacts: state.contacts,
    inputName: state.inputs.inputName,
    inputPhone: state.inputs.inputPhone,
    errorInputName: state.errors.errorInputName,
    errorInputPhone: state.errors.errorInputPhone
  });
};

const mapDispatchToProps = {
  addContact,
  changeInputName,
  changeInputPhone,
  changeErrorName,
  changeErrorPhone
};

const WrappedAddContactForm = connect(mapStateToProps, mapDispatchToProps)(AddContactForm);

export default WrappedAddContactForm;