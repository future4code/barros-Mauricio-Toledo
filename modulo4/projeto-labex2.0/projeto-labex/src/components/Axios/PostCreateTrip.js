import { clear } from "@testing-library/user-event/dist/clear";
import axios from "axios";

export function PostCreateTrip(url,body, header){

    return (
        axios.post(url, body, header).then((response)=>{
            alert("Viagem criada !")
        }).catch((error)=>{
            alert("Atenção: erro!")
            console.log(body)
        }) 
    )
}