import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Formulario2 } from "../components/Formulario2";
import { MyTrips } from "../components/MyTrips";
const Rotas=()=>{

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Formulario2/>} />
                <Route path="/tripdetail" element={<MyTrips/>} />
            </Routes>
        </BrowserRouter>
    )
}
 export default Rotas;