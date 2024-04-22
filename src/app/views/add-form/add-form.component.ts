import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/data-services.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormArray} from '@angular/forms';


@Component({
  selector: 'app-tables',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit{
 
 
  options!: FormGroup;
  errorMessage: string | null = null; 
  roles: any[] = [
    { name: 'Admin', value: 'admin' },
    { name: 'Professor', value: 'pro' },
    { name: 'Student', value: 'etudient' }
  ];

  userForm: FormGroup = new FormGroup({
    // Initialize your form controls here
  });

  constructor(private userService: UserService, private fb: FormBuilder) {}

  
  ngOnInit(): void {

    this.userForm = this.fb.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      adresse: ['', Validators.required],
      roles: this.buildRoles()
        });
  }
  buildRoles() {
    const arr = this.roles.map(role => {
      return this.fb.control(false);
    });
    return this.fb.array(arr);
  }
  

  get rolesFormArray() {
    return this.userForm.get('roles') as FormArray;
  }

  onSubmit() {
    if (this.userForm.valid) {
      const selectedRoles = this.userForm.value.roles
        .map((checked: boolean, i: number) => checked ? this.roles[i].value : null)
        .filter((v: string | null) => v !== null);
      const formData = {
        ...this.userForm.value,
        roles: selectedRoles
      };
      this.userService.addUser(formData).subscribe({
        next: (user) => {
          console.log('User added:', user);
          this.userForm.reset(); // Reset the form on success
        },
        error: (error) => {
          console.error('Error adding user:', error);
          this.errorMessage = 'Failed to add user: ' + (error.error.message || 'Unknown error');
        }
      });
    }
  }
  


  
}
