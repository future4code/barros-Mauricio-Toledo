import foto from './mauricio.jpg';
import './App.css';

function App() {
  function onclick(params) {
    alert("Boa noite")
    
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ola meu nome é Mauricio!</h1>
        <img src={foto} className="App-logo" alt="logo" />
        <p>
         Estou aprendendo 
        </p>
        <button onClick={onclick}> Clique aqui </button>
        
      </header>
    </div>
  );
}

export default App;
