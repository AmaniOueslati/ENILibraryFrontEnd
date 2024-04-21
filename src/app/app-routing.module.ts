import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisitorsComponent } from './layouts/visitors/visitors.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { ProfComponent } from './layouts/prof/prof.component';
import { StudentComponent } from './layouts/student/student.component';

const routes: Routes = [{path:'' , component:VisitorsComponent},
  {path:'admin' , component:AdminComponent,
  children: [
    { path: '', loadChildren: () => import('./views/dashboard-admin/dashboard-admin.module').then(m => m.DashboardAdminModule) },
    { path: 'tables', loadChildren: () => import('./views/tables/tables.module').then(m => m.TablesModule) },
    { path: 'teachers', loadChildren: () => import('./views/teachers-admin/teachers-admin.module').then(m => m.TeachersAdminModule) },
    { path: 'exams-info1', loadChildren: () => import('./views/exams-info1-admin/exams-info1-admin.module').then(m => m.ExamsInfo1AdminModule) },
    { path: 'add-form', loadChildren: () => import('./views/add-form/add-form.module').then(m => m.AddFormModule) }


  ]
  },{path:'prof' , component:ProfComponent},
  {path:'student', component:StudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}