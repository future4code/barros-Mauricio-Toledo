import { Request,Response } from "express";
import { characters } from "../data";
import { character } from '../types';
import connection from '../connection';

export default  async function  deleteCharacter(
    req:Request,
    res:Response
): Promise<void> {

    try {

    const {id} = req.params

    //const index:number = characters.findIndex(
     //   character => character.id === Number(id)
   // )

//if(index > -1) characters.splice(index, 1)
    
await connection("character")
.delete()
.where({id:id})


res.status(200).end()
    } catch (error) {
        res.status(500).send("Unexpected error")
    }
    

}