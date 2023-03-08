import express from "express"

import { UserBusiness } from "../UserBusiness/UserBusiness"
import { UserController } from "../controller/UserController"
import { UserDatabase } from "../data/UserDataBase"

export const userRouter = express.Router()
const userDatabase = new UserDatabase()
const userBusiness = new UserBusiness(userDatabase)
const userController = new UserController(userBusiness)

userRouter.get("/users/:id", userController.getUserById)
userRouter.get("/all", userController.getAllUsers)