import { UserResponse } from "../models/User";

export interface UserRepository {
    getUserById (id:string) : Promise<UserResponse | undefined>
}