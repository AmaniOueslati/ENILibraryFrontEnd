import { Component,OnInit  } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserService } from 'src/app/services/data-services.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-teachers-admin',
  templateUrl: './teachers-admin.component.html',
  styleUrls: ['./teachers-admin.component.css']
})
export class TeachersAdminComponent implements OnInit  {
  users: User[] = [];
  searchControl = new FormControl();
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    
    this.fetchUsersByRole(2);
    
    // Setup the search control
    this.searchControl.valueChanges.pipe(
      debounceTime(300),        // Wait for 300 ms after the last event before emitting last event
      distinctUntilChanged(),   // Only emit if the current value is different from the last
      switchMap(searchTerm => this.userService.searchUsers(searchTerm))
    ).subscribe({
      next: (users) => {
        this.users = users;
      },
      error: (error) => {
        console.error('Error searching users:', error);
      }
    });}

    private fetchUsersByRole(roleId: number) {
      this.userService.getUsersByRoleId(roleId).subscribe({
        next: (users) => {
          this.users = users;
        },
        error: (error) => {
          console.error('Error fetching users by role:', error);
        }
      });
    
  


}

}
