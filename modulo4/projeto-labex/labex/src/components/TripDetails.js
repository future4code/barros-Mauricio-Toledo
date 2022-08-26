import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import {React,useState} from 'react';

function TripDetails () {
    const navigate = useNavigate();
  
  
    const goToHome = () => {
      navigate("/")
    };
    const [travelDetails, setTravelsDetails] = useState([]);
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trip/:id";
    const myHeaders = {
      headers: {
        Authorization: "Mauricio-Toledo-barros",
      },
    };
    const getTravelDetais = () => {
      axios
        .get(url, myHeaders)
        .then((response) => {
          setTravelsDetails(response.data.trips);
          console.log(response.data);
        })
        .catch(() => {
          console.log("Erro");
        });
    };
  const travelTripDetails = travelDetails.map((tripsDt)=>{
    return( <>
    <h1>{tripsDt.candidate}</h1>
    
    </>

    )

  })
    
  
    return ( 
        <div>

        <p>Detalhes</p>
        {travelTripDetails}
        <button onClick={goToHome}>Voltar</button>
        </div>
       
    )
};
export default TripDetails;