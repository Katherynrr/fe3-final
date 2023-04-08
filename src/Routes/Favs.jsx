import React from "react";
//import Card from "../Components/Card";
import { useContextDentGlo } from "../Components/Utils/global.context";
import { useNavigate } from "react-router-dom";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => { 
  const navigate = useNavigate
  const {FavState} = useContextDentGlo()

  return (
    <div>
      <h1>Dentists Favs</h1>
      <div className="card-grid"></div> 
  {/* este componente debe consumir los destacados del localStorage */}
  {/* Deberan renderizar una Card por cada uno de ellos */}
        
        {FavState.map(dentList => (
        <div>
            <h3>{dentList.name}</h3>
            <img className='picdentis' src="/images/doctor.jpg" alt="" />
            <button onClick={() => navigate(-1)}>◄</button>
        </div>
          ))}        
    </div>
  );
};

export default Favs;
