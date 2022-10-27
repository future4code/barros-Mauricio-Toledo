import express, { Request, Response } from "express"
import cors from 'cors'




const app = express()

app.use(express.json())

app.use(cors())


//Exercicio 1

app.get("/ping", (req: Request, res: Response) => {
    res.status(201).send("Pong")
})