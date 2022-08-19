import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './Login';
import HomePage from './HomePage';
import ListTripPage from './ListTripsPage';
import MyTripDetail from './MyTripsDetail';



function Rotas() {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element={<HomePage/> } />
            
            <Route path="trips" element={ <ListTripPage/> } />

            <Route path="login" element={<Login/>} />

            <Route path="/login/myTripDetail" element={<MyTripDetail/>}/>
            
        </Routes>
    </BrowserRouter>
  );
}

export default Rotas;