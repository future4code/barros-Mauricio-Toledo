import React, { useState } from "react";
import "./App.css";
import TelaInicial from "./components/TelaInicial";
import TelaMatch from "./components/TelaMatch";
import axios from "axios";

function App() {
  const aluno = "Mauricio-Toledo-barros"
  const [page, setPage] = useState(0);
  function apagarMatches() {
    axios
      .put(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/clear`
      )
      .then(() => {
        alert("Reset");
        
      })
      .catch(() => {
        alert("Deu ruim não deu bom");
      });
  }
  return (
    <div className="App">
      { page === 0 ? 
      <TelaInicial setPage={setPage} /> : 
      <TelaMatch setPage={setPage} />}
      

      <button onClick={()=>apagarMatches()}>Reset</button>
       
    </div>
  );
}

export default App;
