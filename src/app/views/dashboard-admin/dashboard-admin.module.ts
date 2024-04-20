import { NgModule } from '@angular/core';
import { DashboardAdminComponent } from './dashboard-admin.component';

import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';


const routes: Routes = [
  {
    path: '',
    component: DashboardAdminComponent
  }
];

@NgModule({
  declarations: [
    DashboardAdminComponent
  ],
  imports:[RouterModule.forChild(routes), MatIconModule],
  exports: [RouterModule]
})
export class DashboardAdminModule { }
