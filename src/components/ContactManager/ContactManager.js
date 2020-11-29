import { useState } from "react";
import AddContactForm from "../AddContactForm/AddContactForm";
import ContactList from "../ContactList/ContactList";
import "./ContactManager.css";

const ContactManager = () => {

  const [contacts, setContacts] = useState([]);

  function isNewName(name) {
    return (!(contacts.some(contact => contact.name === name)));
  }

  function isNewPhone(phone) {
    return (!(contacts.some(contact => contact.phone === phone)));
  }

  function addNewContact(name, phone) {

    let newContact = {name: name, phone: phone}
    setContacts([...contacts, newContact]);

  };

  function removeContact(name) {
    setContacts(contacts.filter(contact => contact.name !== name));
  }

  return (
    <div className="contenedor-app">
      <AddContactForm handleSubmit={addNewContact} checkName={isNewName} checkPhone={isNewPhone} />
      <ContactList contacts={contacts} handleRemove={removeContact} />
    </div>
  );
};

export default ContactManager;