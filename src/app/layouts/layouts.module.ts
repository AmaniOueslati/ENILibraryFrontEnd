import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { VisitorsComponent } from './visitors/visitors.component';
import { ProfComponent } from './prof/prof.component';
import { StudentComponent } from './student/student.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AdminComponent,
    VisitorsComponent,
    ProfComponent,
    StudentComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class LayoutsModule { }
