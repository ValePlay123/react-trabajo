import { useContext } from "react";
import { ContextGlobal } from "./utils/global.context";
import img from "./../images/doctor.jpg";
import { useNavigate } from "react-router";
import "./../index.css"; // Importar archivo CSS externo

const Card = ({ name, username, id, theme }) => {
  const navigate = useNavigate();
  const { state, addFav, removeFav } = useContext(ContextGlobal);

  const isFav = state.favs.some(fav => fav.id === id);

  const handleAddFav = () => {
    // Aquí iría la lógica para agregar la Card en el localStorage
    if (isFav) {
      removeFav({ id });
    } else {
      addFav({ id, name, username });
    }
  };

  return (
    <div className={`card-container ${theme}`}>
      {/* En cada card deberán mostrar el name - username y el id */}
      <img
        className="profile-image"
        src={img}
        alt="Foto de perfil"
        onClick={() => navigate(`/detalles/${id}`)}
      />
      <div className="info-container">
        <p className="user-name">{name}</p>
        <p className="user-name">{username}</p>
        <p className="user-id">{id}</p>
      </div>
      {/* No debes olvidar que la Card a su vez servirá como Link hacia la página de detalle */}
      {/* Además, deberán integrar la lógica para guardar cada Card en el localStorage */}
      <button
        className={`fav-button ${isFav ? "fav-active" : ""}`}
        onClick={handleAddFav}
      >
        {isFav ? "Eliminar de favoritos" : "Agregar a favoritos"}
      </button>
    </div>
  );
};

export default Card;
