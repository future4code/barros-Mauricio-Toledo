import {useNavigate} from "react-router-dom"
import {useEffect,React} from "react"


    
 export function useSecurePage(){
    const navigate=useNavigate()
    const goToLogin = () =>{
        navigate("login")
      };
    useEffect(()=>{
        const token=localStorage.getItem("token")
        if (!token){
            goToLogin(navigate)
        }
    },[])

};