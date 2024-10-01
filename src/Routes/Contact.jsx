import Form from "../Components/Form";
import "./../index.css"; // Importamos el archivo CSS

// Este componente deberá ser estilado como "dark" o "light" dependiendo del theme del Context
const Contact = () => {
  return (
    <div className="container">
      <h2 className="title">Ingrese su gmail</h2>
      <p className="description">Complete los campos para continuar con el registro</p>
      <Form />
    </div>
  );
};

export default Contact;

