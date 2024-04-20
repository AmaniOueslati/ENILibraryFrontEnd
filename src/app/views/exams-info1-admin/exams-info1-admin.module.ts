import { NgModule } from '@angular/core';
import { ExamsInfo1AdminComponent } from './exams-info1-admin.component';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from "@angular/material/card";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from '@angular/material/checkbox';


const routes: Routes = [
  {
    path: '',
    component: ExamsInfo1AdminComponent
  }]

@NgModule({
  declarations: [
    ExamsInfo1AdminComponent
  ],
  imports:[RouterModule.forChild(routes),  MatToolbarModule,MatCardModule,FlexLayoutModule,MatButtonModule,MatCheckboxModule ],
 
  exports: [RouterModule]
})
export class ExamsInfo1AdminModule { }
