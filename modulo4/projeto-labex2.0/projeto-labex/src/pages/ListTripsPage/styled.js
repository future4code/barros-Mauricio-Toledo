import styled from "styled-components";
import Milano from '../../images/milano.jpg'

export const Lista = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    background-image: url(${Milano});
    background-repeat: no-repeat;
    background-size: 100vw;

    .botoes {
        width: 80%;
        display: flex;
        gap: 15px;
        justify-content: space-between;
        margin: 3% 0;
    }

    h1{
        color: white;
        margin-top: 5px;
        letter-spacing: 1px;
    }
`
export const CC = styled.section`
   display: grid;
   width: 80%;
   grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
   align-items: center;
   justify-content: center;
   gap: 20px;
   wrap


    h1{
        margin-top: 40%;
        text-align: center;
    }

`
export const CV = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5%;
    height: 280px;
    width: 100%;
    padding: 15px;
    margin: 15px 0;
    border:  2px solid;
    box-shadow: inset 0 0 32px 0 ;
    border-radius: 16px;
    color: blue;
    background-color:yellowgreen;
`