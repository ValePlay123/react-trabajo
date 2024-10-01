import { useContext, useState } from "react";
import { ContextGlobal } from "./utils/global.context";
import "./../index.css"; // Archivo CSS externo

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const { state } = useContext(ContextGlobal);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length <= 5) {
      setError('Verifique su información nuevamente');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Por favor verifique su información nuevamente');
      return;
    }
    setError('');
    setSuccess(`Gracias ${name}, te contactaremos cuando antes vía mail`);
    console.log({ name, email });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre completo"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input"
        />
        <button type="submit" className="submit-button">Enviar</button>
      </form>
      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">{success}</p>}
    </div>
  );
};

export default Form;

