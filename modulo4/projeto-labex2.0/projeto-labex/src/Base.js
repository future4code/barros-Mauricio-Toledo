import { createGlobalStyle } from "styled-components";

export const Base = createGlobalStyle`
    :root{
        --preto: black;
        --lilas: #7641BF;
        
        --background-btn: rgba(250, 235, 215, 0.7);
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Prompt', sans-serif;
        list-style: none;
    }

    body{
        background-color:blue;
      
    }

    h1 {
        color: yellow;
        z-index: 1;
        font-weight: 800;
    }

    button {
        font-size: 16px;
        font-weight: 700;
        text-decoration: none;
        padding: 12px;
        border: var(--lilas) 2px solid;
        box-shadow: yellow;
        border-radius: 16px;
        background-color: blue;
        color: antiquewhite;
        font-weight: 400;

        text-shadow: 0 0 8px var(--lilas), 0 0 32px;
        cursor: pointer;
        z-index: 1;

        &:hover{

            background-color: var(--background-btn);
        color: var(--roxo-profundo);
        }
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 35px 40px;
        width: 500px;
        max-width: 90%;
        margin: 15px 10px;
        border: var(--roxo-azulado) 2px solid;
        box-shadow: inset 0 0 32px 0 var(--roxo-azulado), 0 0 32px 0 var(--roxo-azulado);
        border-radius: 16px;
        color: var(--roxo-profundo);

        input, select{
            width: 90%;
            font-size: 18px;
            padding: 5px;
            border-radius: 3px;
        }

        div{
            display: flex;
            width: 90%;
            justify-content: space-between;
            flex-wrap: wrap;
            margin-top: 20px;
        }

        label{
            margin: 20px 0 10px 0;
            text-align: center;
        }
    }

`

