import { UserResponse,userRoles } from "../../src/models/User";
export const UserMock: UserResponse = {
    id: "id",
    name: "Carol Angel",
    email: "carolanjos@gmail.com",
    role: userRoles.NORMAL
}