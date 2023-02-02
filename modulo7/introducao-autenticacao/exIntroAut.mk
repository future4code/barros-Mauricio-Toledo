Ex :1
A:
No caso do uuid seria melhor com uma string, pois o id generator gera uma chave composta de numeros e letras.
B: import { Idgenerator } from "../services/idGenerator"
const idGenerator = new Idgenerator ()
const id: string = idGenerator.generateId()
 na pasta services
 Ex :2

A: Os dados seram salvos no token (id), a chave é usada para criptografar o token
, pode ser configuradas para durar um tempo limitado.
B: import * as jwt from "jsonwebtoken"
import { AuthenticatorData } from '../models/user';
export class Authenticator {
    public generateToken = ({id}: AuthenticatorData): string => {
        const token = jwt.sign(
            {id},
            "tioDafanta",
            { expiresIn: "1h"}
            
        )
        return token
    }
} pasta services
ex 3 :

