
import styled from "styled-components";
export const NavBar = styled.nav `
display: flex;
padding: 10px 0;
justify-content:space-around;
width:100%;
height: 45px;
&:first-child{
    color:red;
    font-size: 1.3rem;
    
};
.comments{
    color:blue;
}
.user{
    color:purple;
}
`
export const Maindiv = styled.div `
height: 100vh;
width:100%;
font-family: "roboto";
background: #f5f7fa;
`
export const Photos = styled.div`
height: calc(100vh - 45px);
display:flex;
flex-direction: column;
align-items:center;
img{
    width: 700px;
    height: 500px;
    border-radius: 10px;
    display:flex;
    align-items:flex-end;
    color:#eee;
    box-shadow: 0 2px 10px 0 rgba(136,136,136,.77)
}
`
export const TextBio = styled.div `
padding: 15px;
background: rgb(2,0,36);
background: rgb(2,0,36);
background: linear-gradient(180deg, rgba(2,0,36,1) 0% ,
rgba(35,34,65,0) 0%,
rgba(0,0,0, .7) 50%
);
border-radius:10px;
.nome{
    display:flex;
    align-items:center;
    margin-bottom: 5px;
    font-size: 1.8rem;
    font-weight: 400px;
};
.idade{
    display:flex;
    align-items:center;
    margin-bottom: 5px;
    font-size: 1.8rem;
    margin-left:10px;
    font-weight: 400px;
};
.bio{
    line-height:1.6rem;
    font-weight: 350px;
    font: 1rem;
}`
export const Acoes = styled.div`
display:flex;
flex:auto;
align-items:center;
margin: 1rem 0;

   
    justify-content: space-between;
    font-size: 2rem;
box-shadow:0,2px,6px,0 rgba(112,125,135,.15);
.close{
    color:gray;
    width:60px;
    height:60px;

};
.curtiu{
    color:red;

};

.superLike{
    color:blue;

};
.resetar{
    color:green;

};


`
export const Botão = styled.button`
width:150px;
    height:150px;

`
export const TelaDeMatches = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    width: 70vh;
    min-height: 550px;
    border: 1px solid black;
    align-items: center;
    background-color: purple;
    margin-left: 450px;
    div {
        display: flex;
        justify-content: space-around;
        width: 100%;
    }
    ul{
        width: 50%;
        
        li {
            display: flex;
            list-style: none;
            align-items: center;
            justify-content: space-between;
            p {
                font-size: 18px;
            }
        }
    }
        
    img{
        width: 65px;
        height: 65px;
        border-radius: 50%;
    }
`

export const Warning = styled.p`
            font-size: 25px;
        text-align: center;
        padding: 90px 28px;
` 
export const MyButton = styled.button`
    background: indigo;
    border: 0;
    color: white;
    padding: 15px;
    border-radius: 20px;
    transition: 0.4s ease;
    button:hover{
        background: black;
    cursor: pointer;
        
    }
    `

    
  