import { useState } from "react";
import AddContactForm from "../AddContactForm/AddContactForm";
import ContactList from "../ContactList/ContactList";

const ContactManager = () => {

  const [contacts, setContacts] = useState([]);
  
  function addNewContact(name, celphone) {
    const validContact = true;
    
    if (validContact) {
      let newContact = {name: name, celphone: celphone}
      setContacts([...contacts, newContact]);
    } else {
      alert("Invalid contact!!!");
    }
  };

  return (
    <div>
      <AddContactForm handleSubmit={addNewContact} />
      <h2>Lista de Contactos</h2>
      <ContactList contacts={contacts} />
    </div>);
};

export default ContactManager;