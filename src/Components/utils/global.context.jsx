import { createContext, useEffect, useReducer, useMemo } from "react";

export const initialState = { theme: "light", data: [], favs: [] };

const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
    case 'SET_DATA':
      return { ...state, data: action.payload };
    case 'ADD_FAV':
      return { ...state, favs: [...state.favs, action.payload] };
    case 'REMOVE_FAV':
      return { ...state, favs: state.favs.filter(fav => fav.id !== action.payload.id) };
    default:
      return state;
  }
};

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Fetch de datos inicial
  useEffect(() => {
    fetch('/api/professionals')
      .then(response => response.json())
      .then(data => dispatch({ type: 'SET_DATA', payload: data }));
  }, []);

  // Cargar favoritos desde localStorage al inicio
  useEffect(() => {
    const storedFavs = localStorage.getItem('favs');
    if (storedFavs) {
      dispatch({ type: 'SET_FAVS', payload: JSON.parse(storedFavs) });
    }
  }, []);

  // Guardar los favoritos en localStorage cuando cambien
  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(state.favs));
  }, [state.favs]);

  // useMemo para optimizar la creación del valor de contexto
  const contextValue = useMemo(() => ({
    state,
    toggleTheme: () => dispatch({ type: 'TOGGLE_THEME' }),
    addFav: (professional) => dispatch({ type: 'ADD_FAV', payload: professional }),
    removeFav: (professional) => dispatch({ type: 'REMOVE_FAV', payload: professional }),
  }), [state]);

  return (
    <ContextGlobal.Provider value={contextValue}>
      {children}
    </ContextGlobal.Provider>
  );
};

