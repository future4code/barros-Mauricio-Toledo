import axios from "axios"
import { useForm } from "./hooks/useForm"
import { BASE_URL } from "../constants/constants"
import { FormularioLogin } from "./Styled"

export function Login() {
    const [body,onChange,clear]=useForm({ email: "", password: ""})
   
    const fazerLogin = (event) => {
        event.preventDefault()
        axios.post(`${BASE_URL}Mauricio-Toledo-barros/login`, body).
        then((response)=>{
            console.log(response.data);
        }).catch((error)=>{
            alert("Senha ou usuario invalido")
        })
        clear();
        
    }

    return (
        <FormularioLogin>
            <h1> Login </h1>
            <form onSubmit={fazerLogin}>
                <label htmlFor="email">E-mail: </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="E-mail"
                    value={body.email}
                    onChange={onChange}
                    required
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                />
                <label htmlFor="password">Senha: </label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    placeholder="Senha"
                    value={body.password}
                    onChange={onChange}
                    pattern="^.{3,}"
                />
                <button>Login</button>
            </form>
        </FormularioLogin>

    )
};
export default Login;