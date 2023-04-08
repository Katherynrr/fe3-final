import React from 'react'
import { Link } from 'react-router-dom'
import { useContextDentGlo } from './Utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const{themeState, themeDispatch} = useContextDentGlo()
  const changeTheme = () => {
    if (themeState.theme){
      themeDispatch({type: "CHANGE_DARK"})
    } else{
      themeDispatch({type: "CHANGE_LIGHT"})
    }
  }


  return (    
    <nav className='navbar'>
      <h2>DH Odonto</h2>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <Link to='/'><h3>Home</h3></Link>
      <Link to='/contacto'><h3>Contact</h3></Link>
      <Link to='/dentista'><h3>Detail</h3></Link>
      <Link to='/favs'><h3>Favs</h3></Link>
    

      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
    <button className='themeButton'onClick={changeTheme}>{themeState.theme ? "🌚Dark":"🌤️Light"} </button>
    

    </nav>
  ) 
}

export default Navbar