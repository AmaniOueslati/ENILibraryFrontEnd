import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loading: boolean = false;
  returnUrl: string = '/student';
  


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

    
    onSubmit(): void {
      this.formSubmitted = true;
      if (this.loginForm.valid) {
        this.loading = true;
        this.authenticationService.logIn(this.formValues['username'].value, this.formValues['password'].value)
          .subscribe(
            (data: any) => {
              console.log('Data received:', data); // Ajout du console.log ici
              this.loading = false;
              const roles:string[] = data.roles;
              if (roles.includes('ROLE_ADMIN')){
                  this.router.navigate(['/admin']);
              }
              else if (roles.includes('ROLE_PROF')){
                this.router.navigate(['/prof']);
            }
            else if (roles.includes('ROLE_ETUDIENT')){
              this.router.navigate(['/student']);
          }
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
    }
    
    
  }