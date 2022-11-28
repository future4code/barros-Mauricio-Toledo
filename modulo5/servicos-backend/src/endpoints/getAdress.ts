import {Request, Response} from "express";
import getAdressInfo from "../info/getAdressInfo";
import {connection} from "../data/connection";

async function getAdress (req: Request, res: Response) {
    let statusCode = 400
    try{
        const {numero, cep} = req.body;
    
        if (!cep) {
            statusCode = 422;
            throw new Error("Informar o cep")
        }

        if (!numero) {
            statusCode = 422;
            throw new Error("Informar o número de residencia");           
        }
    
    
    const {logradouro, complemento, bairro, localidade, uf} = await getAdressInfo(cep);
    
    await connection.raw(
        `
        INSERT INTO users_adress
        VALUES(
            default, "${cep}", "${logradouro}", ${numero}, "${complemento}", "${bairro}", "${localidade}", "${uf}"
        )
        `
    )
        res.status(200).send("Enviadas para a base de dados!");

    }catch(error: any){
        res.status(statusCode).send(error.message);
    }
}

export default getAdress;