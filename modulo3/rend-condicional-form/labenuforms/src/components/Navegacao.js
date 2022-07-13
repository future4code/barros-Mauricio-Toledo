import React, { useState } from "react";
import Etapa1 from "./Etapa1";
import Etapa2 from "./Etapa2";
import Etapa3 from "./Etapa3";
import Etapa4 from "./Etapa4";
const Navegacao = ()=>{
    const [enviado,setEnviado] =useState(false)
    if (enviado === false ) { 
        return(
            <Etapa1 enviou={setEnviado}/>
        )}
        else if (enviado === true) { 
            return (
                <Etapa2 enviou={setEnviado}/>
            )
            
        } {
            return(
                <Etapa4 enviou={setEnviado}/>
            )
        }
        
    } 

export default Navegacao