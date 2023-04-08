import React, { useState } from "react"
import Contact from "../Routes/Contact";



const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
    const [user, setUser] = useState({
      nombre:"",
      email:"",
    })
    const [show, setShow] =useState(false)
    const [err, setErr] =useState(false)

    const handleSubmit = (event) => {
      event.preventDefault()
         if (user.nombre.length >= 5 && user.nombre.indexOf(" ") !== 0 && user.email !== "" && user.email.indexOf(" ") !== 0 ){
          setShow(true)
          setErr(false)
        } else {
          setShow(false)
          setErr(true)
        }
      }
      
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Nombre</label>
        <input placeholder="Ingrese su Nombre Completo" type="text" value={user.nombre} onChange={(e) => setUser({...user, nombre: e.target.value})}/>
        <label>Email</label>
        <input placeholder="Ingrese su Email "type="email" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})}/>
        <br/>
        <button>Enviar</button>
      </form>     
        { err && <h3>Por favor verifique su información nuevamente</h3> }
        { show && < Contact nombre={user.nombre} email={user.email} /> } 

       
        
    </div>
  );
};

export default Form;
