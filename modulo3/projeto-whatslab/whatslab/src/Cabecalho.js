import react from 'react'
import App from './App'
import {Header1} from './style'
import logolabenu from './labenu-logo.jpg'


export function Cabecalho() {
    return (
        <div>
            <Header1>
            <img src={logolabenu}/>
                
                <h1>LabZap</h1>
            </Header1>
        </div>
    )
}
