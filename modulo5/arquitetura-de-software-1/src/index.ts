import express from "express"
import cors from 'cors'

import { DeleteController } from "./controller/DeleteController";
import { FindController } from "./controller/FindController";
import { UserController } from "./controller/UserController";


export const app = express()

app.use(express.json())

app.use(cors())

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});


const findController = new FindController()
app.get("/all",findController.findUser)

const userController =new UserController()
app.post("/createUser",userController.createUser)

const deleteUser = new DeleteController()
app.delete("/:id",deleteUser.deleteUser)