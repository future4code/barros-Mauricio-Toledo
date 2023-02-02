//ex 1 b
import { v4 } from "uuid";

export class Idgenerator {
    public generateId = () => {
        return v4()
    }
}