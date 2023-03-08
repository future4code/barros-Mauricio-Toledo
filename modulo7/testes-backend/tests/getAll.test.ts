import { UserBusiness } from "../src/UserBusiness/UserBusiness"
import { UserDatabaseMock } from "./mocks/userDataMock"
import { UserMock } from "./mocks/userMock"

describe(" getAllUsers endpoint", () => {
    const userBusiness = new UserBusiness( new UserDatabaseMock() )

    test("Retorna erro unauthorized", async () => {
        expect.assertions(2)
        try {
            await userBusiness.getAllUsers("NORMAL")
        } catch (err: any) {
            expect(err.statusCode).toBe(401)
            expect(err.message).toBe("Role não da acesso a info.")
        }
    })

    test("Retorna de maneira valida", async () => {
        const result = await userBusiness.getAllUsers("ADMIN")

        expect(result.length).toBe(1)
        expect(result).toContain(UserMock)
    })
})