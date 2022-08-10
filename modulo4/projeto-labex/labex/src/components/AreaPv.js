import {useNavigate} from 'react-router-dom'
function AdmHomePage() {
    const navigate = useNavigate();
  
  
    const goToHome = () => {
      navigate("/")
    }
  
   
  
return (
    <div>
        <h2>teste</h2>
        <button onClick={goToHome}>volta</button>
    </div>

)

};
export default AdmHomePage