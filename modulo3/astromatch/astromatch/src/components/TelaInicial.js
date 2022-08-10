import React from "react";
import { useEffect, useState } from "react";
import { TextBio, Maindiv, NavBar, Photos, Acoes, Botão } from "../Style";
import { FaCommentAlt, FaUserAlt, FaHeart } from "react-icons/fa";
import { SiTinder } from "react-icons/si";
import { GrPowerReset } from "react-icons/gr";
import { AiFillCloseCircle } from "react-icons/ai";


import axios from "axios";

const TelaInicial = ({setPage}) => {
 
 
   
  const aluno = "Mauricio-Toledo-barros";

  const [id, setId] = useState(undefined);
  const [mineProfiles, setMineProfiles] = useState([]);
  const url =
    "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person";
  const myHeaders = {
    headers: {
      Authorization: "Mauricio-Toledo-barros",
    },
  };
  function curtir() {
    axios
      .post(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/choose-person`,
        {
          id: id,
          choice: true,
        }
      )
      .then((response) => {
        getProfile();
        console.log(response)
      })
      .catch((error) => {
        console.log(error.id);
      });
  }
  function rejeitar() {
    axios
      .post(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/choose-person`,
        {
          id: id,
          choice: false,
        }
      )
      .then((response) => {
        getProfile();
        console.log(response.data)
      })
      .catch((error) => {
        console.log("não foi");
      });
  }

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = () => {
    axios
      .get(url, myHeaders)
      .then((response) => {
        setMineProfiles(response.data.profile);
        setId(response.data.profile.id);
        console.log(response.data);
      })
      .catch(() => {
        console.log("Erro getProfile");
      });
  };


  return (
    <Maindiv>
      <NavBar>
        <div>
          <i  className="fire">
            <SiTinder />
          </i>
        </div>
        <div>
          <i onClick={()=>setPage(1)} className="comments">
            <FaCommentAlt />
          </i>
        </div>
        <div>
          <i  className="user">
            <FaUserAlt />
          </i>
        </div>
      </NavBar>

      <Photos>
        <img src={mineProfiles.photo} alt="foto" width="150" height="150px" />
      </Photos>
      <TextBio>
        <h2 className="nome">Nome: {mineProfiles.name}</h2>
        <h2 className="idade">Idade: {mineProfiles.age}</h2>
        <h2 className="bio">Bio: {mineProfiles.bio}</h2>
      </TextBio>

      <Acoes>
        <i onClick={rejeitar} className="close">
          <AiFillCloseCircle />
        </i>

        <i onClick={curtir} className="curtiu">
          <FaHeart />
        </i>

        <i className="resetar">
          <GrPowerReset />
        </i>
      </Acoes>
    </Maindiv>
  );
};
export default TelaInicial;
