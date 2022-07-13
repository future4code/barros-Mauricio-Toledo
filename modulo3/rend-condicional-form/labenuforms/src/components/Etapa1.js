import React from "react";
const Etapa1 =(props)=>{
    const enviarForm =(event)=>{
        event.preventDefault();
        props.enviado(true)
    }

    

return( 
<form>
    <label>Nome:</label>
    <input type ="text" required></input>
    <label>Idade:</label>
    <input type ="number" required></input>
    <label>E-mail::</label>
    <input type ="text" required></input>
    <label>Nivel de ensino:</label>
    <label>
        <select >
            <option selected >--Escolha o nivel de escolaridade--</option>
            <option className="Esmi">Ensino médio incompleto</option>
            <option className="Esmc">Ensino médio completo</option>
            <option className="Essi">Ensino superior incompleto</option>
            <option className="Essc">Ensino superior completo</option>


        </select>
        <button onClick={enviarForm}>Enviar</button>
            
        
    </label>
  

</form>
    
    )
}
export default Etapa1

 