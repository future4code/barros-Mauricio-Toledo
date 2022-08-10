import axios from "axios"
import { useState } from "react";
function PaginaDeLogin() {
    const [login,setLogin] = useState("")
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/login"
    const aluno = "Mauricio-Toledo-barros"
    const myHeaders = {
        headers: {
          Authorization: aluno,
        },};
        const getLogin = () =>{
            axios.get(url,myHeaders).then((response)=>{
                setLogin(response.data)
                console.log(response.data);

            }).catch("Erro")
        };
    
    return (
        <div>
        <input type="email" id="email" placeholder="Digite o email"/>
        <input type="password" id="password" placeholder="Digite a senha"/>
        <button type="submit">Logar</button>
        </div>
    )
};
export default PaginaDeLogin;