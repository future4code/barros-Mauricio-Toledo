import React from "react";
const Etapa3 = (props)=> {
    const enviarForm =(event)=>{
        event.preventDefault();
        props.enviado(true)
    }

    return(
        <form>
            <label>Porque você não concluiu o curso?</label>
            <input type="text"></input>
            <label>Fez algum outro tipo de curso ?</label>
            <select>
                <option selected>--Escolha o tipo de curso</option>
                <option className="CT">Curso técnico</option>
                <option className="CursoId">Curso de idiomas</option>
                <option className="outtos">Outro tipo de Curso</option>
            </select>
            <button onClick={enviarForm}>Enviar</button>
        </form>
    )
}
export default Etapa3