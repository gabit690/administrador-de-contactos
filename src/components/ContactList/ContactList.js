import "./ContactList.css";

const ContactList = ({contacts, removeContact}) => {

  function handleRemoveContact(e) {
    const value = e.target.innerHTML;
    removeContact(value);
  }

  const contactsTable = (contacts).map((contact, index) => 
    (<tr key={index} onClick={handleRemoveContact} >
      <td>{contact.name}</td>
      <td>{contact.phone}</td>
    </tr>)
  );

  const contenido = (contactsTable.length === 0) ? <p>No tiene contactos :(</p>:(
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Teléfono</th>
        </tr>
      </thead>
      <tbody>
        {contactsTable}
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