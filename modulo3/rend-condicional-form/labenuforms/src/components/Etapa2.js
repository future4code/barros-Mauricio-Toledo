import React from "react"
const Etapa2 =(props)=>{
    const enviarForm =(event)=>{
        event.preventDefault();
        props.enviado(true)
    }


    return(
        <form>
            <label>Qual curso ?</label>
            <input type="text"></input>
            <label >Qual unidade de ensino ?</label>
            <input type="text"></input>
            <button onClick={enviarForm}>Enviar</button>
        </form>
    )
    }
    export default Etapa2