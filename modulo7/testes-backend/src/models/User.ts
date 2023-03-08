export enum userRoles{
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
};
export class User {
    constructor (private id: string , private name: string, private email: string, private password: string, private role: userRoles){
        this.id = id,
        this.name = name,
        this.email = email,
        this.password = password,
        this.role = role
    }

    public getUserId(): string {
        return this.id;
    }


public getUserName(): string {
    return this.name;
};
public getUserEmail(): string {
    return this.email;
};
public getUserRole(): userRoles{
    return this.role;
}}
export interface UserResponse {
    id: string;
    name: string;
    email: string;
    role: userRoles
}