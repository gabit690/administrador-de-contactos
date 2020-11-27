import { useState } from "react";

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
    <form onSubmit={handleSubmit}>
      <h2>Nuevo contacto</h2>
      <label>
        Nombre:
        <input type="text" placeholder="Ingrese un nombre" onChange={handleName} maxLength="15" required autoFocus autoComplete="off" />
      </label>
      <p>{props.errorName ? "(El nombre ya existe)":""}</p>
      <label>
        Celular:
        <input type="tel" onChange={handlePhone} pattern="[0-9]{8,10}" required autoComplete="off" />
      </label>
      <p>{props.errorPhone ? "(Ese número ya fue registrado)":""}</p>
      <button type="submit" >Add</button>
    </form>
  );

};

export default AddContactForm;