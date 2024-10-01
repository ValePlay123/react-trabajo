import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { ContextGlobal } from "../Components/utils/global.context";
import img from "./../images/doctor.jpg";
import "./../index.css"; // Importando los estilos CSS

const Detail = () => {
  const { id } = useParams();
  const { state } = useContext(ContextGlobal);
  const [professional, setProfessional] = useState(null);

  useEffect(() => {
    fetch(`/api/professionals/${id}`)
      .then((response) => response.json())
      .then((data) => setProfessional(data));
  }, [id]);

  if (!professional) return <div className={`loading ${state.theme}`}>Loading...</div>;

  return (
    <>
      <h1 className="detail-title">Detalles</h1>
      <div className="detail-container">
        <img className="profile-image" src={img} alt="Foto de perfil del profesional" />
        <div className={`info-container ${state.theme}`}>
          <div className="info-header">
            <h2 className="section-title">{professional.name}</h2>
            <div className="info-column">
              <p className="text-info">Username: {professional.username}</p>
              <p className="text-info">Email: {professional.email}</p>
            </div>
          </div>
          <div className="contact-info">
            <div className="info-column">
              <h2 className="section-title">Contacto</h2>
              <p className="text-info">Teléfono: {professional.phone}</p>
              <span className="website-link">Website: {professional.website}</span>
              <h2 className="section-title">Empresa</h2>
              <p className="text-info">{professional.company.name}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;