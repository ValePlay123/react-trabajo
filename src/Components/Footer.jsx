import face from "./../images/ico-facebook.png";
import insta from "./../images/ico-instagram.png";
import tik from "./../images/ico-tiktok.png";
import wpp from "./../images/ico-whatsapp.png";
import "./../index.css"; // Importar el archivo CSS externo

const Footer = () => {
  return (
    <footer className="footer-container">
      <p className="footer-text">Flores Valentin Andres</p>
      <img className="logo" src="./images/DM.png" alt="DM-logo" />
      <div className="social-icons">
        {/* Reemplaza con los enlaces y rutas correctas de tus imágenes */}
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src={face} alt="Facebook" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src={insta} alt="Instagram" />
        </a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
          <img src={tik} alt="Tiktok" />
        </a>
        <a href="https://wathsapp.com" target="_blank" rel="noopener noreferrer">
          <img src={wpp} alt="WhatsApp" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

