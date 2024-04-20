import { NgModule } from '@angular/core';
import { TeachersAdminComponent } from './teachers-admin.component';
import { RouterModule, Routes } from '@angular/router';


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
  imports:[RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeachersAdminModule { }
