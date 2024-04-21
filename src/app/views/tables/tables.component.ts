import { Component } from '@angular/core';
import { User } from '../../models/User';
import { UserService } from 'src/app/services/data-services.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent {
  users: User[] = [];
  constructor(private userService: UserService) {}

  search(name: string): void {
    this.userService.searchUsers(name).subscribe({
      next: (users) => {
        this.users = users;
      },
      error: (error) => {
        console.error('Error fetching users:', error);
      }
    });
  }


  ngOnInit(): void {
    
    const roleIdForEtudient = 3; 

    this.userService.getUsersByRoleId(roleIdForEtudient).subscribe({
      next: (users) => {
        this.users = users;
        console.log('Etudient Users:', users);
      },
      error: (error) => {
        console.error('Error fetching etudient users:', error);
      }
    });

    
  


}}
