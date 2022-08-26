import axios from "axios"
import {useState,useEffect,React} from "react"
import {useNavigate} from 'react-router-dom'
function FormularioDeViagem() {
  const navigate = useNavigate();
  
  
    const goToHome = () => {
      navigate("/")
    };
  
    
  
    const [travel, setTravels] = useState([]);
  const url =
    "https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trips";
  const myHeaders = {
    headers: {
      Authorization: "Mauricio-Toledo-barros",
    },
  };
  const getTravel = () => {
    axios
      .get(url, myHeaders)
      .then((response) => {
        setTravels(response.data.trips);
        console.log(response.data);
      })
      .catch(() => {
        console.log("Erro");
      });
  };
  const planetList = travel.map((planets) => {
    return (
      <>
        {planets.planet }
      </>
    );
  });
  useEffect(()=>{
    getTravel()
  },[]);

  return (
    <form>
     <h1>Inscrevasse para a viagem!</h1>
     <label>Nome completo:
         <input placeholder="Digite seu nome" type="text"/>
     </label>
     <label>Idade:
         <input placeholder="Digite sua idade" type="number"/>
     </label>
     <label>E-mail:
         <input placeholder="Digite seu e-mail" type="email"/>
     </label>
     <label>Escolha o Planeta:
        <select>
         <option>{planetList}</option>
        </select>
         
         
     </label>
     <button type="subimmit">Enviar</button>
     <button onClick={goToHome} >voltar</button>
    </form>
    
 )
  
};
export default FormularioDeViagem;