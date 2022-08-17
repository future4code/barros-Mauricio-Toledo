import styled from "styled-components"
import Sistema from "./img/sistema-solar.jpeg"
import Milano from "./img/milano.jpg"
import SPACE from "./img/R.jfif"

export const PaginaInicial = styled.div`
width:1400px;
height:1028px;
display:flex;
flex-direction:column;
align-items: center;
background-image:url(${Sistema});
h1{
    color:red;
    font-size:150px;
    border: 3px 3px;
    border-radius: 3px;
    
};
h2{
    color:yellow;
    font-size:50px;
    background-color:black;
    border:1px solid blue;


};
button{
    width:100px;
    height: 50px;
    font-family: 'Lato', Helvetica, Arial, sans-serif;
  font-weight: 700;
  width: 250px;
  margin: 10px;
  border: 2px solid blue;
  padding: 6px 24px;
  font-size: 1.15em;
  letter-spacing: 1px;
  text-transform: uppercase;
	color: yellow;
  background-color: black;
  
};
`
export const ListaDeViagens = styled.div `
width:1400px;
height:1028px;
display:flex;
flex-direction:column;
align-items: center;
background-image:url(${Milano});
h1{ 
    color:yellow;
    font-size:100px;
    border: 1px solid black;
    background-color:blue;
}


`
export const CaixaDeViagens = styled.span`
width:300px;
height:450px;
display:flex;
flex-direction:column;
align-items: center;
border:2px solid black;
font-family:arial;
background-color:black;

h2{
    color:yellow;
    max-width:max-content;

}

`
export const FormularioLogin = styled.div`
width:1350px;
height:1024px;
display:flex;
flex-direction:column;
align-items:center;
background-image: url(${SPACE});
h1{
    border:1px 1px;
    color:yellow;
    font-size:60px;
};
label{
    box-shadow: 0px 0px 0px 2px #9fb4f2;
	background:linear-gradient(to bottom, #7892c2 5%, #476e9e 100%);
	background-color:#7892c2;
	border-radius:10px;
	border:1px solid #4e6096;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:19px;
	padding:12px 37px;
	text-decoration:none;
	text-shadow:0px 1px 0px #283966;
};
input{
     background-color: #04AA6D;
    color: white;
  padding: 8px;
};
button{
    box-shadow: 0px 0px 0px 2px #9fb4f2;
	background:linear-gradient(to bottom, #7892c2 5%, #476e9e 100%);
	background-color:#7892c2;
	border-radius:10px;
	border:1px solid #4e6096;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:19px;
	padding:12px 37px;
	text-decoration:none;
	text-shadow:0px 1px 0px #283966;

}

`