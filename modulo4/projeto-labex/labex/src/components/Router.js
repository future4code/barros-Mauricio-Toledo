import { BrowserRouter,Routes,Route } from 'react-router-dom';

import FormularioDeViagem from './ApplicationFormPage';
import AdmHomePage from './AreaPv';
import CreateTrip from './CreateTrip';
import HomePage from './HomePage';
import ListaDeViagem from './ListaDeViagens';
import PaginaDeLogin from './PaginaDeLogin';
import TripDetails from './TripDetails';

function Rotas() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element = {<HomePage/>}  />
      <Route element = {<ListaDeViagem/>} path="/viagens" />
      <Route element = {<PaginaDeLogin/>} path="/login" />
      <Route element = {<FormularioDeViagem/>} path="/viagens/formulario" />
      <Route element = {<TripDetails/>} path="/viagens-detalhes" />
      <Route element = {<AdmHomePage/>} path="/home-adm" />
      <Route element = {<CreateTrip/>} path="/criar-viagem" />
      

    </Routes>
    
    </BrowserRouter>

    
  );
};
export default Rotas