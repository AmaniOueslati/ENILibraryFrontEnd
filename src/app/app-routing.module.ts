import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisitorsComponent } from './layouts/visitors/visitors.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { ProfComponent } from './layouts/prof/prof.component';
import { StudentComponent } from './layouts/student/student.component';

const routes: Routes = [{path:'' , component:VisitorsComponent},
  {path:'admin' , component:AdminComponent
  },{path:'prof' , component:ProfComponent},
  {path:'student', component:StudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
