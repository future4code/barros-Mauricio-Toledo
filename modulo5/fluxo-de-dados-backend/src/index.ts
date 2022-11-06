import express from 'express'
import cors from 'cors'
import { Request, Response } from 'express'
import { produtos } from './data'
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
// ex 2
app.get('/products', (req:Request, res:Response)=>{
    try{
        res.status(200).send(produtos)
    }
    catch(err){
        res.status(400).end("Ocorreu algo de errado!")
    }
})
//ex3
//feito
//ex4
app.post('/products/create',(req:Request, res:Response)=>{
    try{
        const prodName = req.body.name
        const prodPrice = req.body.price

        if(!prodName || !prodPrice){
        throw new Error("Parâmetro Errado!")
        }

        const newProd = {
            id: String(produtos.length +1),
            name: prodName,
            price: prodPrice
        }
        produtos.push(newProd)
        res.status(200).send(produtos)
    }
    catch(err: any){
        res.status(400).end(err.message)
    }
})
//ex 5
app.get("/getAllProducts", (req, res) => {
    try {
      if (!req.headers.authorization) {
        throw new Error("Algo errado. Verifique sua autorização")
      }
    } catch (error: any) {
      switch(error.message) {
        case "Algo errado!. Verifique sua autorização":
          res.status(422).send(error.message)
          break
        default:
          res.status(500).send(error.message)
          break
      }
    }
    res.send(produtos)
  }) 
