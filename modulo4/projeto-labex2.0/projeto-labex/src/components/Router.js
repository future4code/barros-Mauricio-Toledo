import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import HomePage from './HomePage';
import ListTripPage from './ListTripsPage';



function Rotas() {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element={<HomePage/> } />
            
            <Route path="trips" element={ <ListTripPage/> } />
            
        </Routes>
    </BrowserRouter>
  );
}

export default Rotas;