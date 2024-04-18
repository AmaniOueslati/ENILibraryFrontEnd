import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { VisitorsComponent } from './visitors/visitors.component';
import { ProfComponent } from './prof/prof.component';
import { StudentComponent } from './student/student.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AdminComponent,
    VisitorsComponent,
    ProfComponent,
    StudentComponent,
    LoginComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutsModule { }
