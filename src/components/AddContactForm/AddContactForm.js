import "./AddContactForm.css"

const AddContactForm = ({contacts, inputName, inputPhone, errorInputName, errorInputPhone, addContact, changeInputName, changeInputPhone, changeErrorName, changeErrorPhone}) => {

  function isNewName(name) {
    return (!(contacts.some(contact => contact.name === name)));
  }

  function isNewPhone(phone) {
    return (!(contacts.some(contact => contact.phone === phone)));
  }

  function handleSubmit(e) {
  
    e.preventDefault();

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

  }

  function handleName(e) {
    changeInputName(e.target.value);
  }

  function handlePhone(e) {
    changeInputPhone(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit} className="formulario-contacto">
      <h2>Nuevo contacto</h2>
      <label>
        Nombre:
        <input type="text" value={inputName} className={errorInputName ? "error-input":""} placeholder="Ingrese su nombre" onChange={handleName} maxLength="15" required autoFocus autoComplete="off" />
      </label>
      <p className="input-estado">{errorInputName ? "El nombre ya existe":""}</p>
      <label>
        Teléfono:
        <input type="tel" value={inputPhone} className={errorInputPhone ? "error-input":""} placeholder="Ingrese su teléfono" onChange={handlePhone} pattern="[0-9]{4}(-|\s)?[0-9]{4}|(11|15)(-|\s)?[0-9]{8}" maxLength="15" required autoComplete="off" />
      </label>
      <p className="input-estado">{errorInputPhone ? "Ese número ya fue registrado":""}</p>
      <button type="submit" >Add</button>
    </form>
  );

};

export default AddContactForm;