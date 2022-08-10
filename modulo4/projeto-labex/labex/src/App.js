
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import FormularioDeViagem from './components/ApplicationFormPage';
import AdmHomePage from './components/AreaPv';
import CreateTrip from './components/CreateTrip';
import HomePage from './components/HomePage';
import ListaDeViagem from './components/ListaDeViagens';
import PaginaDeLogin from './components/PaginaDeLogin';
import TripDetails from './components/TripDetails';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element = {<HomePage/>}  />
      <Route element = {<ListaDeViagem/>} path="/viagens" />
      <Route element = {<PaginaDeLogin/>} path="/login" />
      <Route element = {<FormularioDeViagem/>} path="/formulario" />
      <Route element = {<TripDetails/>} path="/viagens-detalhes" />
      <Route element = {<AdmHomePage/>} path="/home-adm" />
      <Route element = {<CreateTrip/>} path="/criar-viagem" />
      

    </Routes>
    
    </BrowserRouter>

    
  );
}

export default App;
