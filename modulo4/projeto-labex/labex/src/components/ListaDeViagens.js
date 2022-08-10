import axios from "axios";
import { useState,React, useEffect } from "react";
import {useNavigate} from 'react-router-dom'

function ListaDeViagem() {

  const navigate = useNavigate();
  
  
    const goToHome = () => {
      navigate("")
    };
    const goToForm = () =>{
      navigate("formulario")
    }
  
   
  
  const [travel, setTravels] = useState([]);
  const url =
    "https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trips";
  const myHeaders = {
    headers: {
      Authorization: "Mauricio-Toledo-barros",
    },
  };
  const getTravel = () => {
    axios
      .get(url, myHeaders)
      .then((response) => {
        setTravels(response.data.trips);
        console.log(response.data);
      })
      .catch(() => {
        console.log("Erro");
      });
  };
  const travelList = travel.map((trips) => {
    return (
      <>
        <h2>Nome: {trips.name}</h2>
        <h2>Descrição: {trips.description}</h2>
        <h2>Planeta: {trips.planet}</h2>
        <h2>Duração: {trips.durationInDays}</h2>
        <h2>Data: {trips.date}</h2>
        <button onClick={goToForm}>Ir para o fomulario de viagem!</button>
        <button onClick={goToHome}>Voltar ao menu inicial</button>
      </>
    );
  });
  useEffect(()=>{
    getTravel()
  },[]);
  return <>{travelList}
  <button>volta</button>
  </>;
}
export default ListaDeViagem;
