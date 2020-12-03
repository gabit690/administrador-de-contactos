import { connect } from "react-redux";
import {addContact, removeContact, changeInputName, changeInputPhone, changeErrorName, changeErrorPhone} from "./creators"
import ContactManager from "../components/ContactManager/ContactManager";

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
  removeContact, 
  changeInputName,
  changeInputPhone,
  changeErrorName,
  changeErrorPhone
};

const WrappedComponent = connect(mapStateToProps, mapDispatchToProps)(ContactManager);

export default WrappedComponent;