import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';



function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem = "https://www.kana.fr/assets/uploads/2015/01/Monkey-D.-Luffy.png"
          nome="Mauricio Luiz de Toledo" 
          descricao="Ola Eu sou o Mauricio estudante de programação na Labenu!!"
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://cdn.w600.comps.canstockphoto.com.br/operador-centro-chamada-homem-vetor-eps_csp34763386.jpg" 
          nome="Consultoria" 
          descricao="Trabalho como recepcionista!" 
        />
        
        <CardGrande 
          imagem="https://24127.cdn.simplo7.net/static/24127/sku/kits-kit-pao-de-queijo-1-queijo-canastra-1-polvilho-1-cafe-gourmet--p-1593090476633.jpg" 
          nome="Cafeteria" 
          descricao="Café e pão de queijo" 
        />
        <CardPequeno
        imagem= "https://dadoseinsights.com.br/wp-content/uploads/contato2.png"
        email= "tiodafanta@gmail.com"
        adress= "Asgard via nirvana 1248"
        
        />

      </div>

      

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
