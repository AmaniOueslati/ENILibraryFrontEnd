// src/app/user.service.ts
import { Injectable , Inject, forwardRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Feedback } from '../models/Feedback';
import { TokenService } from './token.service';
import { User } from '../models/user';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


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

  getFeedbacks(): Observable<Feedback[]> {
    const httpOptions = this.createHttpOptions();
    return this.http.get<Feedback[]>(`${this.apiUrl}/feedback/all-with-user`, httpOptions);
  }

 
  deleteUser(id: number): Observable<string> {
    const httpOptions = this.createHttpOptions();
    return this.http.delete<string>(`${this.apiUrl}/del/${id}`,  httpOptions);
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
        'Authorization': token ? `Bearer ${this.getToken()}` : ''
      })
    };
  }

  // Hard-coded token for development purposes
  private getHardCodedToken(): string {
    // Replace 'YOUR_HARD_CODED_TOKEN_HERE' with your actual token
    return 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzYWxtYSIsImlhdCI6MTcxMzcyNzE3OCwiZXhwIjoxNzEzODEzNTc4fQ.ontjEYjaiAN6KlYnZ8kbitwQpO7e6Q__2FGdrkmnSirfjyjpvZfYafJ-_3Cvqgs1du-zcoinJd7P4WmgUrwD-w';
  }

  private getToken(): string {
    // Assuming the token is stored in localStorage after login
    return localStorage.getItem('token') || '';
  }


 
  




}
