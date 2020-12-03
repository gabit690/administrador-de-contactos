import AddContactForm from "../AddContactForm/AddContactForm";
import ContactList from "../ContactList/ContactList";
import "./ContactManager.css";

const ContactManager = (props) => {
  
  function isNewName(name) {
    return (!(props.contacts.some(contact => contact.name === name)));
  }

  function isNewPhone(phone) {
    return (!(props.contacts.some(contact => contact.phone === phone)));
  }

  function addNewContact() {
  
    let validName = isNewName(props.inputName);
    let validPhone = isNewPhone(props.inputPhone);
    let validContact = validName && validPhone;

    if (validContact) {

      let newContact = {name: props.inputName, phone: props.inputPhone}
      props.addContact(newContact);
      props.changeInputName('');
      props.changeInputPhone('');
      if (props.errorInputName) props.changeErrorName();
      if (props.errorInputPhone) props.changeErrorPhone();

    } else {

      if ((!validName && !props.errorInputName) || (validName && props.errorInputName)) {
        props.changeErrorName();
      }
      if ((!validPhone && !props.errorInputPhone) || (validPhone && props.errorInputPhone)) {
        props.changeErrorPhone();
      } 

    }

  };

  function removeContact(name) {

    props.removeContact(name);

  }

  return (
    <div className="contenedor-app">
      <AddContactForm 
        handleSubmit={addNewContact}
        inputNameValue = {props.inputName}
        handleChangeName={props.changeInputName}
        errorInputName={props.errorInputName}
        inputPhoneValue = {props.inputPhone}
        handleChangePhone={props.changeInputPhone}
        errorInputPhone={props.errorInputPhone}
      />
      <ContactList contacts={props.contacts} handleRemove={removeContact} />
    </div>
  );
};

export default ContactManager;