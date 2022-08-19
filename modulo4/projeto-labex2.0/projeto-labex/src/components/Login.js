import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useForm } from "./hooks/useForm"

import {FormularioLogin} from "./Styled"

export function Login() {
    const [form, onChange, clear] = useForm({ email: "", password: "" })
    const navigate=useNavigate()
    
    const  goToTripDetail = () =>{
        navigate("/login/myTripDetail")
      };
      const R = goToTripDetail()
    const fazerLogin = (event) => {
        event.preventDefault() //evita que a página seja renderizada novamente ao enviar o formulário

        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/Mauricio-Toledo-barros/login",
            form)
            .then((response) => {
                console.log(response.data)
                localStorage.setItem("token",response.data.token)
                R.goToTripDetail(navigate)
            })
            .catch((error) => console.log(error.message))

         clear();

    }

    return (
        <FormularioLogin>
            <h1> Login - com tag form e hook useForm</h1>
            <form onSubmit={fazerLogin}>
                <label htmlFor="email"> Email: </label>
                <input
                    name="email" 
                    id="email" 
                    placeholder="E-mail"
                    value={form.email}
                    onChange={onChange}
                    type="email" 
                    required 
                />
                <label htmlFor="senha"> Senha: </label>
                <input
                    name="password" 
                    id="senha" 
                    placeholder="Senha"
                    value={form.password}
                    onChange={onChange}
                    type="password" 
                    pattern="^.{3,}$" 
                    title="mínimo de 3 caracteres"
                    required 
                />

                <button type="submit" >Enviar </button> 
            </form>
            </FormularioLogin>

    )
};
export default Login;