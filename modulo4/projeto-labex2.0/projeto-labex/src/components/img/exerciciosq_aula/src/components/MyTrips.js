import useRequestData from "../hooks/useRequestData"
import {useNavigate} from "react-router-dom"
import {BASE_URL} from "../constants/constants"
import { useProtectePage } from "../hooks/useProtectePage";
import { goToLogin } from "../Routers/Coodinator";
export function MyTrips(){
    useProtectePage();
    // const navigate=useNavigate()
    const data=useRequestData(`${BASE_URL}juniorp/trip/reTQKzHx3izgvBMzsFTi`,
    {headers:{
        auth:localStorage.getItem("token")

    }}
    );
    console.log(data);
    // const logOut=()=>{
    //     localStorage.removeItem("token")
    //     goToLogin(navigate)
    // }
    return(
        <>
            <h1>MyTrips</h1>
            {/* <button onClick={logOut}>Logout</button>
             */}
        </>
    )
}