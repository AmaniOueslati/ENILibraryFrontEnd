import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';


export interface LoginResponse {
  token: string;
  user: User;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loading: boolean = false;
  


  loginForm!: FormGroup;
  formSubmitted: boolean = false;
  error: string = '';

  showPassword: boolean = false;

  constructor (
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthService,
    private fb: FormBuilder
     
  ) {
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
  }

  /**
 * convenience getter for easy access to form fields
 */
  get formValues() { return this.loginForm.controls; }



  /**
   * On submit form
   */
    // Propriétés et méthodes existantes...
  
    /*
    onSubmit(): void {
      this.formSubmitted = true;
      if (this.loginForm.valid) {
        this.loading = true;
        this.authenticationService.logIn(this.formValues['username'].value, this.formValues['password'].value)
          .pipe(first())
          .subscribe(
            (data: any) => {
              console.log('Data received:', data); // Ajout du console.log ici
              this.loading = false;
              this.router.navigate([this.returnUrl]);
            },
            (error: any) => {
              console.log(error);
              if (error.status === 400) {
                this.error = "Bad credentials";
              } else {
                this.error = "An unexpected error occurred. Please try again later.";
              }
              this.loading = false;
            }
          );
      }
    }*/

    
   /* onSubmit(): void {
      this.formSubmitted = true;
      if (this.loginForm.valid) {
        this.loading = true;
        this.authenticationService.logIn(this.formValues['username'].value, this.formValues['password'].value)
        .subscribe({
          next: (response) => {
            console.log('Logged in successfully', response);
            console.log('Roles received:', response.roles);
            if (response && response.roles) {
              const roles:string[] = response.roles;
              //if (response && response.roles && response.roles.some(roles => roles.rolename == 'ROLE_ADMIN')) {
              if (response && response.roles && roles.includes('ROLE_ADMIN ')) {
                console.log('Redirecting to admin dashboard');
                this.router.navigate(['/admin']);
              } else if(response.roles.some(role => role.rolename === 'ROLE_PROF')) {
              
                this.router.navigate(['/prof']);
              } else if (response.roles.some(role => role.rolename === 'ROLE_ETUDIENT')){
                this.router.navigate(['/tables']);
              }
            } else {
              console.error('Unexpected response structure:', response);
            }
            this.loading = false;
          },
            error: (error) => {
              console.error('Login failed:', error);
              this.error = "An unexpected error occurred. Please try again later.";
              this.loading = false;
            }
          });
      }
    }*/
    onSubmit(): void {
      this.formSubmitted = true;
      if (this.loginForm.valid) {
        this.loading = true;
        this.authenticationService.logIn(this.formValues['username'].value, this.formValues['password'].value)
          .subscribe({
            next: (response) => {
              console.log('Logged in successfully', response);
              console.log('Roles received:', response.roles);
              if (response && response.roles) {
                response.roles.forEach(e => {
                  console.log('e '+ e)
                  if (e.toString() === 'ROLE_ADMIN'){
                    console.log('yes');
                    this.router.navigate(['/admin']);
                  }else if (e.toString() === 'ROLE_PROF')  {
                    this.router.navigate(['/prof']);

                  }
                else if (e.toString() === 'ROLE_ETUDIENT')  {
                  this.router.navigate(['/tables']);
                }
                else {
                  console.error('Unexpected response structure:', response);
                }
              });

              } 
              this.loading = false;
            },
            error: (error) => {
              console.error('Login failed:', error);
              this.error = "An unexpected error occurred. Please try again later.";
              this.loading = false;
            }
          });
      }
    }
    

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const user = localStorage.getItem('user');
    if (user) {
      const parsedUser = JSON.parse(user);
      if (parsedUser.roles.includes('ROLE_ADMIN')) {
        return true;
      }
    }
    
    this.router.navigate(['/login']);
    return false;
  }

  
    
    
    
  }