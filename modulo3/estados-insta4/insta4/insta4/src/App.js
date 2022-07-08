import React, { useState } from 'react';
import Post from './components/Post/Post';

import './style.js'
import {MainContainer, Myform} from './style.js'
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body {
margin: 0;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
}
code {
font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
  monospace;
}
`

function App() {

  const postagem = [
    {
    nomeUsuario:'paulinha',
    fotoUsuario:'https://picsum.photos/50/50',
    fotoPost:'https://picsum.photos/200/150'
    },

    {
      nomeUsuario:'Enzo',
      fotoUsuario:'https://i.pinimg.com/564x/e3/81/f9/e381f94e800c75721a67f1300db80de3.jpg',
    fotoPost:'https://picsum.photos/200/150'
    },

    {
      nomeUsuario:'Valentina',
      fotoUsuario:'https://picsum.photos/50/50',
    fotoPost:'https://picsum.photos/200/150'
    }
  ]
const [newUser, setNewUser] = useState ('')
const [newPic, setNewPic] = useState('')
  const [novaPostagem, setNovapostagem] = useState('')
  const newPost = (event) =>{
    setNovapostagem(event.target.value)
  }
  const novoUsuario = (event) =>{
    setNewUser(event.target.value)
  }
  const novaFoto = (event) =>{
    setNewPic(event.target.value)
  }
  const adiconar=(e)=>{
    e.preventDefault() 
    const novaPost=[...postagem,{nomeUsuario:newUser,fotoUsuario:newPic,fotoPost:novaPostagem}]
    postagensMap(novaPost)
    setNewUser("")
    setNewPic("")
    setNovapostagem("")
}
  const postagensMap = postagem.map((item)=> {
    return <Post nomeUsuario={item.nomeUsuario} fotoUsuario={item.fotoUsuario} fotoPost={item.fotoPost} />})

return(
  
  <MainContainer>
    <Myform action = ''>
    <input type='text' required placeholder='Nome do usuario' value={newUser} onChange={novoUsuario}></input>
                <input type='text'required placeholder='foto do usuario' value={newPic} onChange={novaFoto}></input>
                <input type='text'required placeholder='url' value={novaPostagem} onChange={newPost}></input>
                <button onClick={adiconar}>Postar</button>
    </Myform>
    
    <GlobalStyle/>
      {postagensMap}
      
        
      
  </MainContainer>
)

}
export default App;