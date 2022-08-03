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
    width: 98vw;
    height: 85vh;
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

