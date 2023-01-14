//ex1 
export class User{
    public id:number;
    public email:string;
    public password:string;

    constructor(id:number,email:string, password:string){
       this.id = id
        this.email = email;
        this.password = password;
    }
    public usuario(){
        console.log(`O usuario do ${this.id}, e email ${this.email}, deixou sua conta publica`);
        
    }
}