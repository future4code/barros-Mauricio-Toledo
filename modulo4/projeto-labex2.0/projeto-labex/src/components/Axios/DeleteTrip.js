import axios from "axios";
import React from "react";
export function DeleteTrip (url,header){

    return (
            axios.delete(url, header).then(()=>{
                alert("Viagem!")
            }).catch(()=>{
                alert("Erro")
            }) 
    )
}