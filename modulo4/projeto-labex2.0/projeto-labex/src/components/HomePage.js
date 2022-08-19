import { PaginaInicial } from "./Styled"
import React from 'react';
import { useNavigate } from 'react-router-dom';
function HomePage() {
  


  const navigate = useNavigate();

  
  const goToTrips = () => {
    navigate("trips")
  };
const goToLogin = () =>{
  navigate("login")
};
  

    return( 
       <PaginaInicial>
        <h1>Labex</h1>
        <h2>Viagens pelo nosso sistema solar!</h2>
        <button onClick={goToTrips}>Ir para Viagens</button>
        <button onClick={goToLogin} >Logar</button>
        <button>ADM</button>
       </PaginaInicial>

        
    )
    
};
export default HomePage