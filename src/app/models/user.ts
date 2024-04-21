export class User {
    iduser!: number;
    fname?: string;
    lname?: string;
    email?: string;
    password?: string;
    adresse?: string;
    listroles!: Role[];
    enabled?: true | false;
    emailValide?: true | false;
    authorities?: any[];
    username?: string;
    accountNonLocked?: true | false;
    accountNonExpired?: true | false;
    credentialsNonExpired?: true | false;
  }
  export class Role {
    id?: number;
    rolename!: string;
  }

  