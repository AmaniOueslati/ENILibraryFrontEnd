import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddFormComponent } from './add-form.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path: '',
    component: AddFormComponent
  }
];


@NgModule({
  declarations: [
    AddFormComponent
  ],
  imports:[RouterModule.forChild(routes),CommonModule,ReactiveFormsModule],
  exports: [RouterModule]
})
export class AddFormModule { }
