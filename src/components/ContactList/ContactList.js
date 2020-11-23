const ContactList = (props) => {

  const contacts = props.contacts.map((contact, index) => 
    (<tr key={index} >
      <td>{contact.name}</td>
      <td>{contact.celphone}</td>
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