import axios from "axios";
import React, { useState, useEffect } from "react";
import { MyButton, TelaDeMatches, Warning } from "../Style";

function TelaMatch({ setPage }) {
  const [matchList, setMatchList] = useState([]);

  const aluno = "Mauricio-Toledo-barros";
  function getMatches() {
    axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/matches`
      )
      .then((response) => {
        return setMatchList(response.data.matches);
      })
      .catch((error) => {
        return alert("Erro getMacthes");
      });
  }
useEffect(()=>{
    getMatches()

},[])
  const meusMatches = matchList.map((perfil) => {
    return (
      <ul>
        <li>
          <img src={perfil.photo} alt={perfil.photo_alt}></img>
          <p>{perfil.name}</p>
        </li>
      </ul>
    );
  });

  function apagarMatches() {
    axios
      .put(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/clear`
      )
      .then(() => {
        alert("Não gostou de ninguem!");
        setMatchList([]);
      })
      .catch(() => {
        alert("Deu ruim não deu bom");
      });
  };

  return (
    <TelaDeMatches>
      <h1>Seus Matches </h1>
      <div>
        <MyButton onClick={()=>setPage(0)}>Voltar...</MyButton>
        <MyButton onClick={apagarMatches}>Zerar Matches</MyButton>
      </div>
      {meusMatches.length > 0 && meusMatches}
      {meusMatches.length === 0 && (
        <Warning>
          Ainda não a matches! Uma hora da bom, continua tentando!!
        </Warning>
      )}
    </TelaDeMatches>
  );
}

export default TelaMatch;
