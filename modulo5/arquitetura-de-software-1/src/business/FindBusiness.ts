import { UserDataBase } from "../data/UserDataBase";

export class FindBusiness {

    findUser = async (): Promise<void> => {
        try {

            const findUser = new UserDataBase()

            await findUser.findUser()

        } catch (e: any) {
            throw new Error(e.message);
        }
    }
}