import React from "react";
import { useNavigate } from 'react-router-dom'
import { useRequestData } from '../../components/hook/useRequestData'
import { BASE_URL } from '../../components/constants/constants'
import {  CC, CV, Lista } from './styled'
import * as Coordinators from '../../Coordinators/Coordinators'

function ListTripPage() {
  const navigate = useNavigate()
  const [listaViagens, isLoading, error] = useRequestData(`${BASE_URL}/trips`)

  const renderList = listaViagens&&listaViagens.trips.map((viagem) => {
    return (
      <CV key={viagem.id}>
        <p><strong>Nome: </strong> {viagem.name}</p>
        <p><strong>Descrição: </strong> {viagem.description}</p>
        <p><strong>Planeta: </strong> {viagem.planet}</p>
        <p><strong>Duração: </strong>{viagem.durationInDays} dias</p>
        <p><strong>Data: </strong>{viagem.date}</p>
      </CV>
    )
  })

    return (
      <Lista>
        <h1> Viagens </h1>
        <div className="botoes">
          <button onClick={() => Coordinators.goToTripsApplication(navigate)}>Increva-se em uma viagem!</button>
          <button onClick={() => navigate(-1)}> 	&#8592; Voltar</button>
        </div>
        <CC>
          {isLoading && <h1>Carregando...</h1>}
          {!isLoading && error && <h1>{error}</h1>}
          {!isLoading && renderList && renderList}
        </CC>
      </Lista>
    );
  }
  
  export default ListTripPage;