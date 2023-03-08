import { CustomError } from "../errors/CustomError"
import {BaseDatabase} from "./BaseDatabase"
import {User, UserResponse} from "../models/User"
import {UserRepository} from "./UserRepository"


export class UserDataBase extends BaseDatabase implements UserRepository {
    TABLE = "User_Arq"
    getUserById = async (id:string) : Promise<UserResponse | undefined> => {
        try {
            const result BaseDatabase.connection(this.TABLE).select("id","name","email","role").where({id}))
            return result[0]
        } catch (err: any) {
            throw new CustomError(err.StatusCode, err.message)
        }
    }
}