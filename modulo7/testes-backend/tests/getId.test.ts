import { UserBusiness } from "../src/UserBusiness/UserBusiness"
import { CustomError } from "../src/errors/CustomErros"
import { UserDatabaseMock } from "./mocks/userDataMock"
import { UserMock } from "./mocks/userMock"


describe(" getUserById endpoint", () => {
    const userBusiness = new UserBusiness( new UserDatabaseMock() )

    test("Deve receber id inexistende e CustomError", async () => {
        expect.assertions(3)
        try {
            await userBusiness.getUserById("id")
        } catch (err: any) {
            expect(err).toBeInstanceOf(CustomError)
            expect(err.message).toBe("User id não encontrado.")
            expect(err.statusCode).toBe(404)
        }
    })

    test("Recebe um id valido", async () => {
        const result = await userBusiness.getUserById("id")
        expect(result).toEqual(UserMock)
    })
})