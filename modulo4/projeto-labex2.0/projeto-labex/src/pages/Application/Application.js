import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRequestData } from "../../components/hook/useRequestData";
import {FormApp} from "./styled"
import { BASE_URL } from "../../components/constants/constants";
import { useForm } from "../../components/hook/useForm"
import { PostApplyToTrip } from "../../components/Axios/PostApplyToTrip";
import Header from "../../components/Header/Header";


function Application() {
  const navigate = useNavigate();
  const [idViagem, setIdViagem] = useState("")
  const [body, onChange, clear] = useForm({name: "", age: "", applicationText: "", profession: "", country: "Brasil"})
  const [listaViagens] = useRequestData(`${BASE_URL}/trips`);
  
  const listaViagensSelect = listaViagens &&
  listaViagens.trips.map((viagem) => {
    return (
      <option key={viagem.id} value={viagem.id}>
        {viagem.name} - {viagem.planet}
      </option>
    );
  })
  
  function applyToTrip (event) {
    event.preventDefault()
    PostApplyToTrip(`${BASE_URL}/trips/${idViagem}/apply`, body)
    console.log(idViagem)
    clear()
  }
  

  return (
    <FormApp>
      <Header 
      titulo="Vamos para onde ?"
      />
      <form onSubmit={applyToTrip}>
        <label htmlFor="selectTrip">Selecione a viagem desejada:</label>
        <select 
        id="selectTrip"
        value={idViagem}
        onChange={(e) => setIdViagem(e.target.value)}
        >
          <option>Selecione uma viagem...</option>
          {listaViagensSelect}
        </select>
        <label htmlFor="name">Insira seu nome completo: </label>
        <input type="text" 
        placeholder="Nome" 
        minLength="5" 
        id="name"
        name="name"
        required
        value={body.name}
        onChange={onChange}
        />
        <label htmlFor="age">Insira sua idade (mínimo 18 anos!):</label>
        <input type="number" 
        placeholder="Idade" 
        min="18" 
        id="age"
        name="age"
        required
        value={body.age}
        onChange={onChange}
        />
        <label htmlFor="applicationText">Escreva seu texto de candidatura!</label>
        <input
          type="text"
          placeholder="Mensagem..."
          minLength="30"
          id="applicationText"
          name="applicationText"
          required
          value={body.applicationText}
          onChange={onChange}
        />
        <label htmlFor="profession">Insira sua profissão:</label>
        <input type="text" 
        placeholder="Profissão" 
        minLength="10"
        id="profession"
        name="profession"
        required 
        value={body.profession}
        onChange={onChange}
        />
        
        <div>
          <button type="submit">Enviar</button>
          <button onClick={() => navigate(-1)} type='button'> &#8592; Voltar</button>
        </div>
      </form>
    </FormApp>
  );
}

export default Application;
