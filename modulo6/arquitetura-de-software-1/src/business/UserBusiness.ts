import { UserDataBase } from "../data/UserDataBase";

export class UserBusiness {
    createUser = async (input: any): Promise<void> => {

        try {
            const { name, email, password } = input

            if (!name || !email || !password) {
                throw new Error("Algo errado! Verifique suas credenciais");
            }
            const userDatabase = new UserDataBase()

            await userDatabase.createUser({
                name,
                email,
                password
            })

        } catch (e: any) {
            throw new Error(e.message);
        }
    }
}