import React from 'react'
import Card from '../Components/Card'
import { useContextDentGlo }  from "../Components/Utils/global.context";
import { Link } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => { 
 
  const {apiState} = useContextDentGlo()  
 
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        
      {/* Aqui deberias renderizar las cards */}
      {apiState.denList.map(dent => <Link to ={'/dent/'+ dent.id} key= {dent.id}><Card/><h4>{dent.name} <br /> {dent.username}</h4></Link> )}

 
      </div>
    </main>
  )
}

export default Home