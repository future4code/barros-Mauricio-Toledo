import React from "react"
import {useEffect,useState} from "react"
import { TextBio, Maindiv, NavBar, Photos,Acoes } from "../Style"
import {FaCommentAlt,FaUserAlt,FaHeart,FaStar} from "react-icons/fa"
import {SiTinder} from "react-icons/si"
import {GrPowerReset} from "react-icons/gr"
import {AiFillCloseCircle} from "react-icons/ai"

import axios from "axios"

const TelaInicial = () => {
    const [mineProfiles, setMineProfiles] = useState([]);
    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person";
    const  myHeaders = {
        headers: {
          Authorization: "Mauricio-Toledo-barros"
        }
      };
      const getProfile = () => {
        axios
        .get(url, myHeaders)
          .then((response) => {
            mineProfiles(response.data.results.lists)
            setMineProfiles(response.data.results.lists);
          })
          .catch((erro) => {
            console.log(erro.response);
          });
      };
      
     
    
      getProfile();

    return (
   <Maindiv>
   

   <NavBar >
    <div>
       <i  className="fire"><SiTinder/></i>
       </div>
       <div>
        <i className="comments"><FaCommentAlt/></i>
        </div>
        <div>
        <i className="user"><FaUserAlt/></i>
        </div>

    </NavBar>
    
    
    
    <TextBio>
        
        <h2 className="nome">nome</h2>
        <h2 className="idade">idade</h2>
        <h2 className="bio">bio</h2>
        </TextBio>
   
    
    <Acoes>
<i className="close"><AiFillCloseCircle/></i>
    
<i className="curtiu"><FaHeart/></i>
    
<i className="superLike"><FaStar/></i>
    
    <i className="resetar"><GrPowerReset/></i>
    </Acoes>
    
    </Maindiv>
    )

}
export default TelaInicial