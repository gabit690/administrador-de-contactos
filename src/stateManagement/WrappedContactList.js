import { connect } from "react-redux";
import { removeContact } from "./creators"
import ContactList from "../components/ContactList/ContactList"

const mapStateToProps = (state) => {
  return ({
    contacts: state.contacts
  });
};

const mapDispatchToProps = {
  removeContact
};

const WrappedContactList = connect(mapStateToProps, mapDispatchToProps)(ContactList);

export default WrappedContactList;