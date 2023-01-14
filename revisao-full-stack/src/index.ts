import  express  from "express";
import cors from "cors";
import ping from './endpoints/ping';

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003,()=>{
    console.log("Server on 3003");
    
})

app.get("/ping", ping)