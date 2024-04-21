export interface User {
    iduser: number;
    fname: string | null;
    lname: string | null;
    username: string;
    email: string;
    password: string;
    adresse: string | null;
    enabled: boolean;
    credentialsNonExpired: boolean;
    accountNonExpired: boolean;
    accountNonLocked: boolean;
    roles: UserRole[];
}

export interface UserRole {
    idrole: number;
    rolename: string;
    name: string;
}