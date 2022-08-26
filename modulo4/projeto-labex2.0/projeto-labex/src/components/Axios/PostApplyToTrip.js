import axios from "axios";

export function PostApplyToTrip(url,body){

    return (
        axios.post(url, body).then((response)=>{
            alert("Dados Enviados!")
            console.log('foi')
        }).catch((error)=>{
            alert("Algo errado!")
        }) 
    )
}
