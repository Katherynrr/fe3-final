import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {useContextDentGlo} from '../Components/Utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => { 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

    const {id} = useParams()  
    const navigate = useNavigate()
    const {favDispatch, apiState, /*apiDispatch,*/ getDent} = useContextDentGlo()
       
    useEffect(() => {        
      getDent(id)  
    }, [getDent, id])

    const addFav = () => {
      favDispatch({type: 'ADD_FAV', payload: apiState.favs})
  }

   return (
    <div>
      <h1>Dentail Dentist id</h1>
      <div className='Dentis'></div>
      <img className='picdentis' src="/images/doctor.jpg" alt="" />      
      
      
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */} 
      <h5>ID #: {apiState.dentDetail.id} <br />{apiState.dentDetail.name}
      <br />{apiState.dentDetail.email} <br />{apiState.dentDetail.phone} <br />{apiState.dentDetail.website}</h5>
      
      <button className='return' onClick={() => navigate(-1)}>◄</button>
      <button className='buttonfav2' onClick={addFav}>⭐</button>
   
    </div>
  )
}
export default Detail