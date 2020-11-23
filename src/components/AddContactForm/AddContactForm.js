import { useState } from "react";

const AddContactForm = (props) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  function handleName(e) {
    setName(e.target.value);
  }

  function handleCelphone(e) {
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
        <input type="text" placeholder="Ingrese un nombre" onChange={handleName} maxLength="25" required autoFocus autoComplete="off" />
      </label>
      <label>
        Celular:
        <input type="tel" onChange={handleCelphone} required autoComplete="off" />
      </label>
      <button type="submit" >Add</button>
    </form>
  );

};

export default AddContactForm;