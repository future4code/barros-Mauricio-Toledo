import React from "react";
import {useNavigate} from 'react-router-dom'
import {PaginaHome} from "./Styled"
function HomePage() {
  
   
    
    return ( 
        <PaginaHome>
        <h1>Labex</h1>
        <h2>Seja bem vindo/a a nossa agência de viagens!</h2>
      <button onClick={""}>Ir para viagens</button>
      <button onClick={""}>Login</button>
      </PaginaHome>
    )
};
export default HomePage;