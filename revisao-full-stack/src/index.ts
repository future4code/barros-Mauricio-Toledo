import  express  from "express";
import cors from "cors";
import ping from './endpoints/ping';
import  createClient  from "./endpoints/createClient";
import getAllClients from './endpoints/allClients';
import getAllProducts from './endpoints/allProducts';

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003,()=>{
    console.log("Server on 3003");
    
})

app.get("/ping", ping)

// add client
app.post("/client",createClient)

//retorna dados dos clients
app.get("/clients", getAllClients)
//retorna dados dos Produtos
app.get("/products", getAllProducts)

console.log(new Date().toISOString().slice(0,10));
