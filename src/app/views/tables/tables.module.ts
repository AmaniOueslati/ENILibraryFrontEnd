import { NgModule } from '@angular/core';
import { TablesComponent } from './tables.component';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';


const routes: Routes = [
  {
    path: '',
    component: TablesComponent
  }
];

@NgModule({
  declarations: [
    TablesComponent
  ],
  imports:[RouterModule.forChild(routes), MatIconModule],
  exports: [RouterModule]
})
export class TablesModule { }
