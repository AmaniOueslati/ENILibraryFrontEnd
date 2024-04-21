import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { VisitorsComponent } from './visitors/visitors.component';
import { ProfComponent } from './prof/prof.component';
import { StudentComponent } from './student/student.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';





@NgModule({
  declarations: [
    AdminComponent,
    VisitorsComponent,
    ProfComponent,
    StudentComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,RouterModule,
    MatSidenavModule,
    FormsModule,
    MatButtonModule,
    MatSidenavModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatExpansionModule,
    MatTooltipModule,
    MatExpansionModule,
    BrowserAnimationsModule 
  ]
})
export class LayoutsModule { }
