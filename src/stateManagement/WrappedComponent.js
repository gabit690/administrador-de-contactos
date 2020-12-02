import { connect } from "react-redux";
import {addContact, removeContact, changeInputName, changeInputPhone, changeErrorName, changeErrorPhone} from "./creators"
import ContactManager from "../components/ContactManager/ContactManager";

const mapStateToProps = (state) => {
  return ({
    contacts: state.contacts,
    inputName: state.inputName,
    inputPhone: state.inputPhone,
    errorInputName: state.errorInputName,
    errorInputPhone: state.errorInputPhone
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