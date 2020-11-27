import "./ContactList.css";

const ContactList = (props) => {

  function handleRemove(e) {
    const value = e.target.innerHTML;
    props.handleRemove(value);
  }

  const contacts = props.contacts.map((contact, index) => 
    (<tr key={index} onClick={handleRemove} >
      <td>{contact.name}</td>
      <td>{contact.phone}</td>
    </tr>)
  );

  const contenido = (props.contacts.length === 0) ? <p>No tiene contactos :(</p>:(
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Teléfono</th>
        </tr>
      </thead>
      <tbody>
        {contacts}
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