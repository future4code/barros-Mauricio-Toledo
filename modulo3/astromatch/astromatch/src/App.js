import React, { useState } from "react";
import "./App.css";
import TelaInicial from "./components/TelaInicial";
import TelaMatch from "./components/TelaMatch";


function App() {
 
  const [page, setPage] = useState(0);
 
  return (
    <div>
      { page === 0 ? 
      <TelaInicial setPage={setPage} /> : 
      <TelaMatch setPage={setPage} />}
      

     
       
    </div>
  );
}

export default App;
