import {useNavigate} from 'react-router-dom'
function CreateTrip() {
    const navigate = useNavigate();
  
  
    const goToTravels = () => {
      navigate("viagens")
    }
  
    const goToLogin = () => {
      navigate("login")
    };
  
    return (
        <p>
            create trip
        </p>
    )
};
export default CreateTrip;