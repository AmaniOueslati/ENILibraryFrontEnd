import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { environment } from "src/app/environment/environment.prod";
import { TokenService } from "./token.service";
import { Role, User } from "../models/User";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private url = environment.apiUrl + "/getone/";
  constructor(
    private httpClient: HttpClient,
    private tokenService: TokenService
  ) {}

  /**
   * Returns user By Id
   * Used for auth after closing the site
   *
   */
  getById(id: number): Observable<User> {
    const url = this.url + id;
    return this.httpClient.get<User>(url);
  }


}
