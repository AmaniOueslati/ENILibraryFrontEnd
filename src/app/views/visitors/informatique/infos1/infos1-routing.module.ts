import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Infos1Component } from './infos1.component';

const routes: Routes = [{path:'' , component:Infos1Component}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Infos1RoutingModule { }
