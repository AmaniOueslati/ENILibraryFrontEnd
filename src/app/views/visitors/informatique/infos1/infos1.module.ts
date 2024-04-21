import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Infos1RoutingModule } from './infos1-routing.module';
import { Infos1Component } from './infos1.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav'; 


@NgModule({
  declarations: [
    Infos1Component
  ],
  imports: [
    CommonModule,
    Infos1RoutingModule,HttpClientModule,MatSidenavModule
  ]
})
export class Infos1Module { }
