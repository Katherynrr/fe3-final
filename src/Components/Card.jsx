import React from "react";
import { useContextDentGlo }  from "../Components/Utils/global.context";



const Card = ({ name, username, id }) => {
   // Aqui iria la logica para agregar la Card en el localStorage
 
   const {favDispatch, apiState, } = useContextDentGlo()
       
  
   const addFav = () => {
     favDispatch({type: 'ADD_FAV', payload: apiState.favs})
 }

   
  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <img className="docimg" src="./images/doctor.jpg" alt=""/>
        <h4>{name}</h4>
        <h4>{username}</h4>
        <h4>{id}</h4>

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
       
        <button className='buttonfav' onClick={addFav}>⭐</button>
    </div>
  );
};

export default Card;
