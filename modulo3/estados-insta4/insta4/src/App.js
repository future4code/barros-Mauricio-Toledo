import React from 'react';

import Post from './components/Post/Post';
import './style.css';
const Lista =
[{
    nomeUsuario:'paulinha',
        fotoUsuario:'https://picsum.photos/50/50',
        fotoPost:'https://picsum.photos/200/150'
},
{
    nomeUsuario:'enzo',
        fotoUsuario:'https://cdn.pixabay.com/photo/2017/04/18/23/35/frog-2240764_960_720.jpg',
        fotoPost:'https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_960_720.jpg'
},
{
    nomeUsuario:'michael',
        fotoUsuario:'https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_960_720.jpg',
        fotoPost:'https://t.ctcdn.com.br/-jlqUwy3GTXxkIrRyo31X0qqggU=/340x265:1654x1005/1314x739/smart/filters:format(webp)/i521747.jpeg'}

]



function App() {
return(
  <div className='MainContainer'>
    {Lista.map((item)=>{
      return <Post nomeUsuario={item.nomeUsuario} fotoUsuario={item.fotoUsuario} fotoPost={item.fotoPost} >
        
      </Post>
    })}
           
  </div>
)

}


export default App;
