import React from 'react'
import Form from '../Components/Form'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = ({nombre}) => {
 
  return (
    <div>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
       
      <Form/>
      <h3> Gracias {nombre} te contactaremos cuanto antes vía mail</h3> 
      
    </div>
  )
}

export default Contact