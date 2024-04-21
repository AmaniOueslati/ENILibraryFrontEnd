// src/app/user.service.ts
import { Injectable , Inject, forwardRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/User'; // Assume you have a User model class
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8081';
  



  constructor(private http: HttpClient) {}

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
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.getHardCodedToken()}`  // Use the hard-coded token
      })
    };
  }

  // Hard-coded token for development purposes
  private getHardCodedToken(): string {
    // Replace 'YOUR_HARD_CODED_TOKEN_HERE' with your actual token
    return 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzYWxtYSIsImlhdCI6MTcxMzYzMDA0NSwiZXhwIjoxNzEzNzE2NDQ1fQ.FJr-KOMFEXZw82Ie6q1ncSAvtqkwf3YquMpem_k1AALea-KH7e-5hHfqUvY7pvUOTFTFg5dSBtVMwRKURsAOqw';
  }
}
