import { CustomError } from "../errors/CustomErros"
import { BaseDatabase } from "./BaseDataBase"
import {User, UserResponse} from "../models/User"
import {UserRepository} from "./UserRepository"


export class UserDatabase extends BaseDatabase implements UserRepository {
    TABLE = "User_Arq"

    getUserById = async (id: string): Promise<UserResponse | undefined> => {
        try {
            const result = await BaseDatabase.connection(this.TABLE).select("id", "name", "email", "role").where({id})
            return result[0]
        } catch (err: any) {
            throw new CustomError(err.statusCode, err.message)
        }
    } 
    getAllUsers = async (): Promise<UserResponse[]> => {
        try {
            return await BaseDatabase.connection(this.TABLE).select("id", "name", "email", "role")
        } catch (err: any) {
            throw new CustomError(err.statusCode, err.message)
        }
    }
}
