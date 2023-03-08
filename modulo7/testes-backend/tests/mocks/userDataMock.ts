import { UserResponse } from "../../src/models/User"
import { UserRepository } from "../../src/data/UserRepository"
import { UserMock } from "./userMock"


export class UserDatabaseMock implements UserRepository {
    TABLE = "User_Arq"

    getUserById = async (id: string): Promise<UserResponse | undefined> => {
        return id === "id"? UserMock : undefined
    }

    getAllUsers = async (): Promise<UserResponse[]> => {
        return [UserMock, UserMock]
    }
}