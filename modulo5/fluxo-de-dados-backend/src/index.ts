import express from 'express'
import cors from 'cors'
import { Request, Response } from 'express'
const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});

// ex1
app.get('/test', (req:Request, res:Response)=>{
    try{
        res.status(200).send("All good!")
    }
    catch(err){
        res.status(400).end("Algo errado!")
    }
})
app.listen(3003, () => {
    console.log("Servidor  3003")
})