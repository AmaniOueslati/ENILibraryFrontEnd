import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, map } from "rxjs";
import { environment } from "src/app/environment/environment";
import { Role, User } from "src/app/models/user";
import { TokenService } from "./token.service";
import { UserService } from "./user.service";


@Injectable({
  providedIn: "root",
})
export class AuthService {
  isAdmin(): Boolean {
    return (
      this.currentUser() &&
      this.currentUser().listroles &&
      this.currentUser().listroles.filter((t: Role) => t.rolename.includes("ADMIN"))
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
  

  
  public logIn(username: string, password: string): Observable<{ token: any | string; user: User }> {
    return this.httpClient
      .post<{ token: any | string; user: User }>(this.url + "/signin", {username,password,});

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
 
  /*logOut() {
    this.tokenService.logOut();
    this.nextUser(new User());
  }*/
}
