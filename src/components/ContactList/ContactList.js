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

  if (props.contacts.length === 0) {
    return (<p>No tiene contactos :(</p>);
  } else {
    return (
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
  }

};

export default ContactList;