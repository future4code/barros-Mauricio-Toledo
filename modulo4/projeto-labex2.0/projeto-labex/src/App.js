import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminHomePage from './pages/AdminHomePage/AdminHomePage'
import Application from "./pages/Application/Application";
import CreateTripPage from './pages/CreateTripPage/CreateTripPage'
import HomePage from './pages/HomePage/HomePage'
import ListTripPage from './pages/ListTripsPage/ListTripsPage'
import LoginPage from './pages/LoginPage/LoginPage'
import TripDatailsPage from './pages/TripDatailsPage/TripDatailsPage'
import {Base } from "./Base";

function App() {
  
  return (
    <div>
    <Base />
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='/admin/trips/list' element={<AdminHomePage />} />
        <Route path='/admin/trips/create' element={<CreateTripPage />} />
        <Route path='/admin/trips/:id' element={<TripDatailsPage />} />
        <Route path='trips/application' element={<Application />} />
        <Route path='/trips/list' element={<ListTripPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
