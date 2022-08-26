import React from "react";
import {useNavigate} from 'react-router-dom'
import { Home } from "./styled";

import * as Coordinators from '../../Coordinators/Coordinators'

function HomePage() {
  const navigate = useNavigate();

  function goAdminHome (){
    if(sessionStorage.getItem("token")){
      Coordinators.goToTripListAdmin(navigate)
    } else {
      Coordinators.goToLogin(navigate)}
    }

    return (
      <Home>
        <h1>Bem Vindos a LabeX! Ao infinito e alem! 🚀</h1>
        <div>
          <button onClick={() => Coordinators.goToTripsList(navigate)}>Lista de Viagens</button>
          <button onClick={goAdminHome}>Área de Admin</button>
        </div>
        
      </Home>
    );
  }
  


  export default HomePage;