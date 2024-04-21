// src/app/user.service.ts
import { Injectable , Inject, forwardRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/User'; // Assume you have a User model class
import { HttpHeaders } from '@angular/common/http';
import { TokenService } from './token.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8081';
  



  constructor(private http: HttpClient, private tokenService: TokenService) {}

   // Retrieve all users
   getUsers(): Observable<User[]> {
    const httpOptions = this.createHttpOptions();
    return this.http.get<User[]>(`${this.apiUrl}/getallusers`, httpOptions);
  }

   // Add a new user
   addUser(user: User): Observable<User> {
    const httpOptions = this.createHttpOptions();
    return this.http.post<User>(`${this.apiUrl}/adduser2`, user, httpOptions);
  }

  getUsersByRoleId(roleId: number): Observable<User[]> {
    const httpOptions = this.createHttpOptions();
    return this.http.get<User[]>(`${this.apiUrl}/getuserfridrole/${roleId}`, httpOptions);
  }

  
  searchUsers(username: string): Observable<User[]> {
    const httpOptions = this.createHttpOptions();
    return this.http.get<User[]>(`${this.apiUrl}/getuserFromUN/${username}`, httpOptions);
  }


   // Helper method to create HTTP options with headers
   private createHttpOptions(): { headers: HttpHeaders } {
    const token = this.tokenService.currentToken();
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : ''
      })
    };
  }
}
