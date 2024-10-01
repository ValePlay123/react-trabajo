import { useContext, useEffect, useState } from "react";
import { ContextGlobal } from "./utils/global.context";
import { Link, useLocation } from "react-router-dom";
import "./../index.css"; // Archivo CSS externo

const Navbar = () => {
  const location = useLocation();
  const { state, dispatch } = useContext(ContextGlobal);
  const [theme, setTheme] = useState(state.theme);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark-mode");
    } else {
      document.documentElement.classList.remove("dark-mode");
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    dispatch({type: 'CHANGE_THEME', payload: theme})
  };


  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className={`nav-item ${location.pathname === "/" ? "active" : ""}`}>
          <Link className="nav-link" to="/">
            Inicio
          </Link>
        </li>
        <li
          className={`nav-item ${
            location.pathname === "/contacto" ? "active" : ""
          }`}
        >
          <Link className="nav-link" to="/contacto">
            Contacto
          </Link>
        </li>
        <li
          className={`nav-item ${
            location.pathname === "/favoritos" ? "active" : ""
          }`}
        >
          <Link className="nav-link" to="/favoritos">
            Favoritos
          </Link>
        </li>
      </ul>
      <button className="theme-button" onClick={handleChangeTheme}>
        Tema
      </button>
    </nav>
  );
};

export default Navbar;

