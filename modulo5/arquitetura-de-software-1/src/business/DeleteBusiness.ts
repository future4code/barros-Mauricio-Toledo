import { UserDataBase } from "../data/UserDataBase"

export class DeleteBusiness{

    deleteUser = async(id:string):Promise<void>=>{

        try{
            if(!id){
                throw new Error("Indentificar o id.")
            }

            const deleteUser = new UserDataBase()

            await deleteUser.deleteUser(id)

        }catch(e:any){
            throw new Error(e.message);
        }
    }
}