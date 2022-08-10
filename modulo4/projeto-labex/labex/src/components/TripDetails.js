import {useNavigate} from 'react-router-dom'
function TripDetails () {
    const navigate = useNavigate();
  
  
    const goToHome = () => {
      navigate("/")
    };
  
    
  
    return ( 
        <div>
        <p>Detalhes</p>
        <button onClick={goToHome}>Voltar</button>
        </div>
       
    )
};
export default TripDetails;