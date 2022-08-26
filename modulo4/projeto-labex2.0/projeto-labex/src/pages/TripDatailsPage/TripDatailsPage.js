import React from "react";

import { useNavigate, useParams } from "react-router-dom";
import { useRequestData } from "../../components/hook/useRequestData";
import { BASE_URL } from "../../components/constants/constants";
import { TDCan,  TDCC, TDCV } from "./styled";
import { useProtectPage } from "../../components/hook/useProtectPage"
import Header from "../../components/Header/Header"
import { PutDecide } from "../../components/Axios/PutDecide";

function TripPageDetail() {
  useProtectPage()
  const navigate = useNavigate();
  const pathParams = useParams()
  const tripId = pathParams.id
  const [data, isLoading, error, reload, setReload] = useRequestData(
    `${BASE_URL}/trip/${tripId}`,
    { headers: { auth: sessionStorage.getItem("token") } }
  );
  
  function toDecide (id, boolean) { 
    PutDecide(`${BASE_URL}/trips/${tripId}/candidates/${id}/decide`, 
    { approve: boolean }, 
    { headers: {auth: sessionStorage.getItem("token")} }).then(()=>setReload(!reload))
  }
  
  const candidacies = data && data.trip.candidates.map((candidate)=>{
    return (
      <TDCan>
    <ul>
      <li key={candidate.id}><span>Nome: </span>{candidate.name}</li>
      <li><span>Profissão: </span>{candidate.profession}</li>
      <li><span>Idade: </span>{candidate.age}</li>
      <li><span>País: </span>{candidate.country}</li>
      <li><span>Texto de candidatura: </span>{candidate.applicationText}</li>
      <div>
        <button onClick={()=>toDecide(candidate.id, true)}>Aprovar</button>
        <button onClick={()=>toDecide(candidate.id, false)}>Reprovar</button>
      </div>
    </ul>
    </TDCan>
    )
  })

  const approveds = data && data.trip.approved.map((candidate)=>{
    return (
      <TDCan>
    <ul>
      <li key={candidate.id}><span>Nome: </span>{candidate.name}</li>
      <li><span>Profissão: </span>{candidate.profession}</li>
      <li><span>Idade: </span>{candidate.age}</li>
      
      <li><span>Texto de candidatura: </span>{candidate.applicationText}</li>
    </ul>
    </TDCan>
    )
  })

  return (
    <TDCC>
      <Header 
        titulo="Detalhes ..."
      />
      <button onClick={() => navigate(-1)}> &#8592; Voltar</button>
      <TDCV>
      {isLoading && <h1>Carregando...</h1>}
      {!isLoading && error && <h1>{error}</h1>}
      {!isLoading && data && (
        <>
          <h1>{data.trip.name}</h1>
          <p>{data.trip.planet}</p>
          <p>{data.trip.date}</p>
        </>
      )}
      </TDCV>
    
    <h1> Pending: </h1>
    {isLoading && <h1>Carregando...</h1>}
    {!isLoading && error && <h1>{error}</h1>}
    {!isLoading && data && data.trip.candidates.length === 0 && <p>Sem viajantes.</p>}
    {!isLoading && data && data.trip.candidates.length > 0 && candidacies}

    <h1> Aprovados: </h1>
    {isLoading && <h1>Carregando...</h1>}
    {!isLoading && error && <h1>{error}</h1>}
    {!isLoading && data && data.trip.approved.length === 0 && <p>Sem viajantes.</p>}
    {!isLoading && data && data.trip.approved.length > 0 && approveds}

    </TDCC>
  );
}

export default TripPageDetail;
