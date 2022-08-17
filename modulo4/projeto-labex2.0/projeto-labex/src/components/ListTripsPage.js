import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GetTrip from "./hooks/GetTrip";

import { CaixaDeViagens, ListaDeViagens } from "./Styled";
function ListTripPage() {
    const navigate = useNavigate();

  
    const goToHome = () => {
      navigate("/")
    };
   
    return(
        <ListaDeViagens>
            <h1>Viagens</h1>
            <button onClick={goToHome}>Voltar</button>
           <CaixaDeViagens> 
            {GetTrip()} 
            </CaixaDeViagens>
<button>Voltar</button>
        </ListaDeViagens>

    )
    
};
export default ListTripPage;