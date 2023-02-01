import * as jwt from "jsonwebtoken"
import { AuthenticatorData } from '../models/user';
export class Authenticator {
    public generateToken = ({id}: AuthenticatorData): string => {
        const token = jwt.sign(
            {id},
            process.env.JTW_KEY as string,
            { expiresIn: "1h"}
            
        )
        return token
    }
    getTokenData = (token: string): AuthenticatorData => {
        const payload = jwt.verify(token, process.env.JTW_KEY as string) as AuthenticatorData
        return payload
    }
}