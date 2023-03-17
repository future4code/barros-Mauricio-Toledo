import { Response, Request } from 'express';
import connection from '../database/connections';

export const getAllClients = async (req:Request,res:Response) => {
    let errorCode = 400;
    try {
       const clients = await connection.select('*').from('Case_Clients');
       
        res.status(200).send("Client criado com sucesso!")
    } 
    catch (error:any) {
        res.status(errorCode).send({message:error.mesage});
        
    }
};
export default getAllClients;