import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/data-services.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent {





  users: User[] = [];
  constructor(private userService: UserService, private router: Router) {}

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

    
  


}

deleteUser(id: number): void {
  this.userService.deleteUser(id).subscribe({
    next: (response) => {
      console.log('Response:', response); // This will log "user successfully deleted !!"
      this.users = this.users.filter(user => user.iduser !== id);  // Update the local data
    },
    error: (error) => {
      console.error('There was an error deleting the user', error);
    }
  });
}



}

