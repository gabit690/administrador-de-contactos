import AddContactForm from "../AddContactForm/AddContactForm";
import ContactList from "../ContactList/ContactList";
import "./ContactManager.css";

const ContactManager = ({contacts, inputName, inputPhone, errorInputName, errorInputPhone, addContact, removeContact, changeInputName, changeInputPhone, changeErrorName, changeErrorPhone}) => {

  function isNewName(name) {
    return (!(contacts.some(contact => contact.name === name)));
  }

  function isNewPhone(phone) {
    return (!(contacts.some(contact => contact.phone === phone)));
  }

  function addNewContact() {
  
    let validName = isNewName(inputName);
    let validPhone = isNewPhone(inputPhone);
    let validContact = validName && validPhone;

    if (validContact) {

      let newContact = {name: inputName, phone: inputPhone}
      addContact(newContact);
      changeInputName('');
      changeInputPhone('');
      if (errorInputName) changeErrorName();
      if (errorInputPhone) changeErrorPhone();

    } else {

      if ((!validName && !errorInputName) || (validName && errorInputName)) {
        changeErrorName();
      }
      if ((!validPhone && !errorInputPhone) || (validPhone && errorInputPhone)) {
        changeErrorPhone();
      } 

    }

  };

  return (
    <div className="contenedor-app">
      <AddContactForm 
        handleSubmit={addNewContact}
        inputNameValue = {inputName}
        handleChangeName={changeInputName}
        errorInputName={errorInputName}
        inputPhoneValue = {inputPhone}
        handleChangePhone={changeInputPhone}
        errorInputPhone={errorInputPhone}
      />
      <ContactList contactsData={contacts} handleRemove={removeContact} />
    </div>
  );
};

export default ContactManager;