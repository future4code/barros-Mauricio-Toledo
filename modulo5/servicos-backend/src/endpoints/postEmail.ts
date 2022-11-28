import {Request, Response} from "express";
import postNodemailer from "../infoEmail/postNodeMailer";

async function postEmail (req: Request, res: Response) {
    try{
        await postNodemailer();
        res.status(201).send("Email enviado!");
    } catch (error: any) {
        res.status(400).send(error.message);
    }
}

export default postEmail;