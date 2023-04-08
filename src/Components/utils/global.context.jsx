/* eslint-disable new-parens */
import { createContext, useContext, useState, useEffect, useReducer } from "react";
import axios from "axios";

//Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo  
export const ContextDentGlo = createContext();

//theme
const themes = {
   dark: {
        theme: false,
        bgColor: 'black',
        color: 'white',
        fontSize: '3rem'
        
    },
    light: {
        theme: true,
        bgColor: 'white',
        color: 'black',
        fontSize: '2.5rem'
    }
}

//Initials
const initialThemeState = themes.light
const initialFavState = JSON.parse(localStorage.getItem('favs')) || []
const initialApiState = {denList: [], dentDetail: {}}

//Theme
const themeReducer = (state, action) => {
  switch(action.type){
    case'CHANGE_DARK':
      return themes.dark
    case 'CHANGE_LIGHT':
      return themes.light
  default: 
    throw new Error()
  }

}
//favs
const favReducer = (state, action) => {
  switch(action.type){
      case 'ADD_FAVORITE':
          return [...state, action.payload]
      default:
          throw new Error
  }
}

//Apis

const apiReducer = (state, action) => {
  // eslint-disable-next-line default-case
  switch(action.type){
    case 'GET_DENTIS':
     return {denList: action.payload, dentDetail: state.dentDetail}
    case 'GET_DENT':
      return {dentDetail: action.payload, denList: state.denList}
      
  }
}

//Contex
const Context = ({ children }) => {
const [themeState, themeDispatch] = useReducer(themeReducer, initialThemeState)
const [favState, favDispatch] = useReducer(favReducer, initialFavState)
const [apiState, apiDispatch] = useReducer(apiReducer,initialApiState)
const [denList, setDenList] = useState([])


//fav
useEffect(() => {
  localStorage.setItem("favs", JSON.stringify(favState))
},[favState])


//Apis

useEffect(() => {
  let url = "https://jsonplaceholder.typicode.com/users"  
  const fetchDent = async () => {
  let res = await fetch(url)
  let data = await res.json()
  apiDispatch({type:'GET_DENTIS', payload: data})
  
}
  fetchDent()
 },[])

 const getDent = (id) =>{
  let url = 'https://jsonplaceholder.typicode.com/users/' + id
  axios(url)
  .then(res => apiDispatch({type: 'GET_DENT', payload: res.data}))
 }



  return (
    <ContextDentGlo.Provider value={{
      themeDispatch, themeState,
      denList, setDenList, 
      favDispatch, favState,
      apiDispatch,apiState,
      getDent,
      }}>
      {children}
    </ContextDentGlo.Provider>
  );
};

export default Context
export const useContextDentGlo = () => useContext(ContextDentGlo)
