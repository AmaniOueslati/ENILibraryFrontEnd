import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { VisitorsComponent } from './visitors/visitors.component';
import { ProfComponent } from './prof/prof.component';
import { StudentComponent } from './student/student.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { TablesModule } from '../views/tables/tables.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TeachersAdminModule } from '../views/teachers-admin/teachers-admin.module';
import { DashboardAdminModule } from '../views/dashboard-admin/dashboard-admin.module';
import { ExamsInfo1AdminModule } from '../views/exams-info1-admin/exams-info1-admin.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatCardModule } from "@angular/material/card";
import { FlexLayoutModule } from "@angular/flex-layout";
import { AddFormModule } from '../views/add-form/add-form.module';





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
    TablesModule,
    TeachersAdminModule,
    DashboardAdminModule,
    ExamsInfo1AdminModule,
    MatSidenavModule,
    FormsModule,
    MatButtonModule,
    MatSidenavModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    RouterModule,
    MatExpansionModule,

    
    
   ]
})
export class LayoutsModule { }