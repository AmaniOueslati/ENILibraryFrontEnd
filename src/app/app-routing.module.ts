import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisitorsComponent } from './layouts/visitors/visitors.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { ProfComponent } from './layouts/prof/prof.component';
import { StudentComponent } from './layouts/student/student.component';
import { LoginComponent } from './layouts/login/login.component';

const routes: Routes = [{path:'' , component:VisitorsComponent , children : [
  { path :'',loadChildren :()=>import('./views/visitors/home/home.module').then(m=>m.HomeModule)},
  { path :'informatiqueS1',loadChildren :()=>import('./views/visitors/informatique/infos1/infos1.module').then(m=>m.Infos1Module)}

]},
  {path:'admin' , component:AdminComponent
  },{path:'prof' , component:ProfComponent},
  {path:'student', component:StudentComponent},
  {path:'login' , component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
