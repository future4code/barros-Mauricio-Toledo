import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../components/hook/useForm";
import {  FormLogin } from "./styled";
import { PostLogin } from "../../components/Axios/PostLogin";
import { BASE_URL } from "../../components/constants/constants";
import Header from "../../components/Header/Header"

function LoginPage() {
  const navigate = useNavigate();

  const [body, onChange, clear] = useForm({ email: "", password: "" });

  function login(event) {
    event.preventDefault()
    PostLogin(`${BASE_URL}/login`, body, navigate);
    clear()
  }

  return (
    <FormLogin>
      <Header 
      titulo="Login"
      />
      <form onSubmit={login}>
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          placeholder="Digite seu e-mail..."
          name="email"
          id="email"
          value={body.email}
          onChange={onChange}
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          required
        />
        <label htmlFor="password">Senha:</label>
        <input
          type="password"
          id="password"
          placeholder="Digite sua senha..."
          name="password"
          value={body.password}
          onChange={onChange}
          required
        />
        <div>
          <button type="submit">Entrar</button>
          <button onClick={() => navigate(-1)} type="button">
            &#8592; Voltar
          </button>
        </div>
      </form>
    </FormLogin>
  );
}

export default LoginPage;
