import React from "react";
import {useNavigate} from 'react-router-dom';
import { CardsG, CardV } from "./styled";
import * as Coordinators from '../../Coordinators/Coordinators';
import { useRequestData } from '../../components/hook/useRequestData';
import { BASE_URL } from '../../components/constants/constants';
import { useProtectPage } from "../../components/hook/useProtectPage";
import Header from "../../components/Header/Header"
import {DeleteTrip} from "../../components/Axios/DeleteTrip"

function AdminHomePage() {
  useProtectPage()
  const navigate = useNavigate()
  const [listaViagens, isLoading, error, reload, setReload] = useRequestData(`${BASE_URL}/trips`)
  
  function handleClick(id) {Coordinators.goToTripDetails(navigate, id)}
  
  function tripDelete (id) {
    if(window.confirm("Tem certeza que deseja excluir")){
      DeleteTrip(`${BASE_URL}/trips/${id}`, 
        { headers: { auth: sessionStorage.getItem("token") } }).then(()=>setReload(!reload))
    }
  }
  
  const renderList = listaViagens&&listaViagens.trips.map((viagem) => {
    return (
      <CardV key={viagem.id}>
          <p><strong>{viagem.name}</strong></p>
        <div>
          <button onClick={() => handleClick(viagem.id)}>Detalhes...</button>
            <span onClick={() => tripDelete(viagem.id)}>
            
            </span>
        </div>
      </CardV>
    )
  })

    return (
      <>
        <Header 
          titulo=" Admin Area, não seja mal!"
        />
        <button onClick={() => Coordinators.goToTripsCreate(navigate)}>Criar</button>
        <button onClick={() => navigate(-1)}> 	&#8592; Voltar</button>
        <CardsG>
          {isLoading && <h1>Carregando...</h1>}
          {!isLoading && error && <h1>{error}</h1>}
          {!isLoading && renderList && renderList}
        </CardsG>
      </>
    );
  }
  
  export default AdminHomePage;