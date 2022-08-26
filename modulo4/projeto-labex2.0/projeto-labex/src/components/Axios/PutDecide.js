import axios from "axios";

export function PutDecide (url,body,header){

    return (
        axios.put(url, body, header).then(()=>{
            if(body.approve === true){
                alert("Aprovado!")
            } else {
                alert("Reprovado")
            }
        }).catch(()=>{
            alert(" Tente novamente!")
        }) 
    )
}