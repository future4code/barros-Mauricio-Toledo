import styled from 'styled-components'

export const Header1 = styled.header`
    height: 10vh;
    width: 100%;
    display: flex;
    justify-content: center;
    img{
        height: 100%;
    }
`

export const Main = styled.main`
    display: flex;
    height: 85vh;
    aside{
        background-color: #FFA500;
        width: 10%;
    }
    section{
        width: 80%;
        display: flex;
        align-items: flex-end;
        justify-content: center;
    }
    form{
        display: flex;
        height: 30px;
        gap: 30px;
        margin-bottom: 10px;
        div{
            display: flex;
            gap: 10px;
            
        }
    }
`
export const Footer = styled.footer`
    height: 5vh;
    background-color: gray;
    margin: 0;
    
    p{
        margin: 0;
        text-align: center;
    }
`
export const ArBox = styled.div `
display: grid;
margin-right: 300px;
align-items:center;
span{
    background-color:green;
    width:300px;
    margin-left:200px;
    border:2px solid black;
    display:flex;
    justify-content:space-between;

    
};



p:nth-child(1){
            color: orange;
            align-items:center;
            border-radius:3px;
            font-family: sans-serif
        }

`
