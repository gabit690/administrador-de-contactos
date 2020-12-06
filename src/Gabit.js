import "./Gabit.css";

const Gabit = ({ mensaje, anio, emoji }) => {
  return (
    <div className="contenedor-gabit">
      <p>{mensaje + " " + anio + ". " + emoji}</p>
    </div>
  );
};

export default Gabit;