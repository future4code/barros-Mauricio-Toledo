import { Request,Response } from "express";
import { characters } from '../data';
import { character } from '../types';
import connection from '../connection';

export default async function getAllCharacters(
    req:Request,
    res:Response
): Promise<void>{

    try{
const name = req.query

//const  result characters: character[] = await connection.raw("SELECT * FROM character")
// res.send(result[0])
const characters: character[] = await connection("character")



   res.send(characters)
    } catch (error) {
        res.status(500).send("Unexpected error")
}}
    
