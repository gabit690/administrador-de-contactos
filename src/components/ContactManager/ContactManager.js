import { useState } from "react";
import AddContactForm from "../AddContactForm/AddContactForm";
import ContactList from "../ContactList/ContactList";
import "./ContactManager.css";

const ContactManager = () => {

  const [contacts, setContacts] = useState([]);
  const [errorName, setErrorName] = useState(false);
  const [errorPhone, setErrorPhone] = useState(false);

  function addNewContact(name, phone) {
    
    let isNewName = !(contacts.some(contact => contact.name === name));
    let isNewPhone = !(contacts.some(contact => contact.phone === phone));

    const validContact = isNewName && isNewPhone;
    
    if (validContact) {
      let newContact = {name: name, phone: phone}
      setContacts([...contacts, newContact]);
      setErrorPhone(false);
      setErrorName(false);
    } else {
      if (!isNewName) {
        setErrorName(true);
      }
      if (!isNewPhone) {
        setErrorPhone(true);
      }
    }

  };

  function removeContact(name) {
    setContacts(contacts.filter(contact => contact.name !== name));
  }

  return (
    <div className="contenedor-app">
      <AddContactForm handleSubmit={addNewContact} errorName={errorName} errorPhone={errorPhone} />
      <ContactList contacts={contacts} handleRemove={removeContact} />
    </div>
  );
};

export default ContactManager;