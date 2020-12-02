import "./AddContactForm.css"

const AddContactForm = (props) => {

  function handleName(e) {
    props.handleChangeName(e.target.value);
  }

  function handlePhone(e) {
    props.handleChangePhone(e.target.value);
  }

  function handleSubmit(e) {
    
    e.preventDefault();
    props.handleSubmit();

  }

  return (
    <form onSubmit={handleSubmit} className="formulario-contacto">
      <h2>Nuevo contacto</h2>
      <label>
        Nombre:
        <input type="text" value={props.inputNameValue} className={props.errorInputName ? "error-input":""} placeholder="Ingrese su nombre" onChange={handleName} maxLength="15" required autoFocus autoComplete="off" />
      </label>
      <p className="input-estado">{props.errorInputName ? "El nombre ya existe":""}</p>
      <label>
        Teléfono:
        <input type="tel" value={props.inputPhoneValue} className={props.errorInputPhone ? "error-input":""} placeholder="Ingrese su teléfono" onChange={handlePhone} pattern="[0-9]{4}(-|\s)?[0-9]{4}|(11|15)(-|\s)?[0-9]{8}" maxLength="15" required autoComplete="off" />
      </label>
      <p className="input-estado">{props.errorInputPhone ? "Ese número ya fue registrado":""}</p>
      <button type="submit" >Add</button>
    </form>
  );

};

export default AddContactForm;