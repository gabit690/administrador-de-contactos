import "./ContactList.css";

const ContactList = ({contacts, removeContact}) => {

  function handleRemoveContact(e) {
    const value = e.target.innerHTML;
    removeContact(value);
  }

  const contactsRows = (contacts).map((contact, index) => 
    (<tr key={index}>
      <td onClick={handleRemoveContact}>{contact.name}</td>
      <td>{contact.phone}</td>
    </tr>)
  );

  const contenido = (contactsRows.length === 0) ? <p>No tiene contactos :(</p>:(
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Teléfono</th>
        </tr>
      </thead>
      <tbody>
        {contactsRows}
      </tbody>
    </table>
  );

  return (
    <div className="seccion-contactos">
      <h2>Lista de Contactos</h2>
      {contenido}
    </div>
  );

};

export default ContactList;