import { NgModule } from '@angular/core';
import { TeachersAdminComponent } from './teachers-admin.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule here


const routes: Routes = [
  {
    path: '',
    component: TeachersAdminComponent
  }
];
@NgModule({
  declarations: [
    TeachersAdminComponent
  ],
  imports:[RouterModule.forChild(routes), CommonModule,ReactiveFormsModule],
  exports: [RouterModule]
})
export class TeachersAdminModule { }
