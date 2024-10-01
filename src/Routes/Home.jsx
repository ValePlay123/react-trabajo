import Card from "../Components/Card";

import { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {state} = useContext(ContextGlobal);
  return (
    <main className="">
      <h1>Profesionales</h1>
      <div className="card-grid">
        {/* Aqui deberias renderizar las cards */}
        {state.data.map(professional => (
          <Card key={professional.id} {...professional}/>
        ))}
      </div>
    </main>
  );
};

export default Home;

