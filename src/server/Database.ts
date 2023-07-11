import PermissionType from "./PermissionType";

interface DatabaseItem{
    email: string;
    password: string;
    permission: PermissionType;
}

const Database : DatabaseItem[] = [
    {
        email: "email123@email",
        password: "123445",
        permission: PermissionType.ADMIN
    }, 
    {
        email: "email1223@email",
        password: "1234245",
        permission: PermissionType.USER
    }
];

export default Database;