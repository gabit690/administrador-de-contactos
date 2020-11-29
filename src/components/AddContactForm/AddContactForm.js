import { useState } from "react";
import "./AddContactForm.css"

const AddContactForm = (props) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [errorName, setErrorName] = useState(false);
  const [errorPhone, setErrorPhone] = useState(false);

  function handleName(e) {
    setName(e.target.value);
  }

  function handlePhone(e) {
    setPhone(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
        
    let isNewName = props.checkName(name);
    let isNewPhone = props.checkPhone(phone);

    const validContact = isNewName && isNewPhone;

    if (validContact) {
      props.handleSubmit(name, phone);
      setName("");
      setPhone("");
      setErrorName(false);
      setErrorPhone(false);
    } else {
      if (!isNewName) {
        setErrorName(true);
      } else {
        setErrorName(false);
      }
      if (!isNewPhone) {
        setErrorPhone(true);
      } else {
        setErrorPhone(false);
      }

    }

  }

  return (
    <form onSubmit={handleSubmit} className="formulario-contacto">
      <h2>Nuevo contacto</h2>
      <label>
        Nombre:
        <input type="text" value={name} className={errorName ? "error-input":""} placeholder="Ingrese su nombre" onChange={handleName} maxLength="15" required autoFocus autoComplete="off" />
      </label>
      <p className="input-estado">{errorName ? "El nombre ya existe":""}</p>
      <label>
        Celular:
        <input type="tel" value={phone} className={errorPhone ? "error-input":""} placeholder="Ingrese su teléfono" onChange={handlePhone} pattern="[0-9]{4}(-|\s)?[0-9]{4}|(11|15)(-|\s)?[0-9]{8}" maxLength="15" required autoComplete="off" />
      </label>
      <p className="input-estado">{errorPhone ? "Ese número ya fue registrado":""}</p>
      <button type="submit" >Add</button>
    </form>
  );

};

export default AddContactForm;