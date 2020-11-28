import { useState } from "react";
import "./AddContactForm.css"

const AddContactForm = (props) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  function handleName(e) {
    setName(e.target.value);
  }

  function handlePhone(e) {
    setPhone(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.handleSubmit(name, phone);
  }

  return (
    <form onSubmit={handleSubmit} className="formulario-contacto">
      <h2>Nuevo contacto</h2>
      <label>
        Nombre:
        <input type="text" placeholder="Ingrese su nombre" onChange={handleName} maxLength="15" required autoFocus autoComplete="off" />
      </label>
      <p className="input-estado">{props.errorName ? "(El nombre ya existe)":""}</p>
      <label>
        Celular:
        <input type="tel" placeholder="Ingrese su teléfono" onChange={handlePhone} pattern="[0-9]{8,10}" maxLength="15" required autoComplete="off" />
      </label>
      <p className="input-estado">{props.errorPhone ? "(Ese número ya fue registrado)":""}</p>
      <button type="submit" >Add</button>
    </form>
  );

};

export default AddContactForm;