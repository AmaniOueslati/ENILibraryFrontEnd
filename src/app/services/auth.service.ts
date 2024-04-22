import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, map } from "rxjs";
import { environment } from "src/app/environment/environment";
import { Role, User} from '../models/user';
import { TokenService } from "./token.service";
import { UserService } from "./user.service";
import {  catchError, throwError } from 'rxjs';


export interface LoginResponse {
  iduser: number;
  username: string;
  email: string;
  roles: Role[];
  jwt: string;
}

@Injectable({
  providedIn: "root",
})
export class AuthService {
  isAdmin(): Boolean {
    return (
      this.currentUser() &&
      this.currentUser().roles &&
      this.currentUser().roles.filter((t: Role) => t.rolename.includes("ADMIN"))
        .length > 0
    );
  }

  private url = environment.apiUrl ;
  constructor(
    private httpClient: HttpClient,
    private tokenService: TokenService,
    private userService: UserService
  ) {}

  private user = new BehaviorSubject<User>(new User());
  sharedUser = this.user.asObservable();

  nextUser(new_user: User) {
    console.log(new_user);

    this.user.next(new_user);
  }

  initializeUser() {
    if (this.tokenService.currentToken())
      this.userService
        .getById(this.tokenService.decodedToken()?.jti)
        .subscribe((data:any) => {
          next: {
            this.nextUser(data);
          }
        });
  }

  currentUser() {
    return this.user.value;
  }

  // enters User object
  // Return Token
  
// AuthService method adjusted to handle new structure
public logIn(username: string, password: string): Observable<User> {
  return this.httpClient.post<LoginResponse>(`${this.url}/signin`, { username, password })
    .pipe(
      map(response => {
        console.log("Login response:", response); // Debugging output
        this.handleAuthentication(response.jwt, response);
        return response; // Pass the entire response for further processing or just return a user object as needed
      }),
      catchError(error => {
        console.error('Login error:', error);
        throw error; // Rethrow or handle appropriately
      })
    );
  }



private handleAuthentication(token: string, response: LoginResponse): void {
  localStorage.setItem('token', token);
  localStorage.setItem('user', JSON.stringify({
    id: response.iduser,
    username: response.username,
    email: response.email,
    roles: response.roles
  }));
}

logOut() {
  this.tokenService.logOut();
  this.nextUser(new User());
}


isLoggedIn(): boolean {
  // Implementation might check for a valid JWT token or a login flag in localStorage
  const token = localStorage.getItem('token');
  return !!token;  // Simple check if token exists
}

  /*public logIn(
    username: string,
    password: string,
  ): Observable<{ token: any | string; user: User }> {
    return this.httpClient
      .post<{ token: any | string; user: User }>(this.url + "/signin", {
        username,
        password,
      })
      .pipe(
        map((res: { token: any | string; user: User }) => {
          // store jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem("token", res.token);
          this.tokenService.nextToken(res.token);
          delete res.user?.authorities;

          this.nextUser(res.user);
          return res.token;
        })
      );
  }
*/

  // enters User object
  // Return Token
 
 
}