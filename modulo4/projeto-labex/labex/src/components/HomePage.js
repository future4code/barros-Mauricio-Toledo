import React from "react";
import {useNavigate} from 'react-router-dom'
function HomePage() {
  
   
    const navigate = useNavigate();
  
    // PASSO 6: CRIAR A AÇÃO DOS BOTÕES
    const goToTravels = () => {
      navigate("viagens")
    }
  
    const goToLogin = () => {
      navigate("login")
    };
  
    return ( 
        <div>
        <h1>Labex</h1>
      <button onClick={goToTravels}>Ir para viagens</button>
      <button onClick={goToLogin}>Login</button>
      </div>
    )
};
export default HomePage;