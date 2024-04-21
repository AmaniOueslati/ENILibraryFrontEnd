import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {

  constructor(private authService: AuthService) {}

  logOut(): void {
    this.authService.logOut();  // This will handle the logout and redirection
  }    

}
