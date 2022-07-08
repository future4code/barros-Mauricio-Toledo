import react, { useState } from 'react'
import App from './App'
import {BlocoVazio, Main, ArBox} from './style'

export function Principal() {
    const [remetente,setRemetente] = useState("")
    const [mensagem, setMensagem] = useState("")
    const changeName = (event) => {
        setRemetente(event.target.value)
    }
    const changeMsg = (event) =>{
        setMensagem(event.target.value)
    }
    
    const [caixaMsg, setCaixaMsg] = useState([
        {nome:"",msg:""}
    ])
    const arrayVazio=caixaMsg.map((item, index)=>{
        return(
             <ArBox>
                 <span onDoubleClick={()=>remover(index)}>
                     <p>{item.nome}</p>
                     
                     <p>{item.msg}</p>
                     </span>
                     
                 </ArBox>
        )
    })
    
    const enviarDados= (event) => {
        event.preventDefault()
        const emptyBox = [...caixaMsg,{nome:remetente,msg:mensagem}] 
        setRemetente("")
        setMensagem("")
        setCaixaMsg(emptyBox)
        
    }
    const remover=(indexRemover)=>{
        const emptyBox=caixaMsg.filter((item,index)=>{
            return index!==indexRemover;
        })
        setCaixaMsg(emptyBox)    
    }
    
    return ( 
        <div>
            <ArBox >
                        {arrayVazio}
                    </ArBox>
            

            
            <Main>
            
                <aside></aside>
                <section>
                    
                    <form>
                        <div class = 'nome'>
                            <label for='remetente' required >Remetente:</label>
                            <input class = "nome" type='text'required id='remetente' value={remetente} onChange={changeName}     ></input>
                        </div>
                        <div>
                        <label for='mensagem' required >Msg:</label>
                        <input class = 'mensagem' type='text' required id='mensagem' value={mensagem} onChange={changeMsg} ></input>
                        </div>
                        <button onClick={enviarDados}>Enviar</button>
                    </form>
                </section>
                <aside></aside>
            </Main>
        </div>
    )
}
