import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AptitudeComponent } from './aptitude/aptitude.component';
import { ResumeComponent } from './resume/resume.component';
import { TechnicalComponent } from './technical/technical.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'resume',
        component: ResumeComponent
      },
      {
        path: 'aptitude',
        component: AptitudeComponent
      }, 
      {
        path: 'technical',
        component: TechnicalComponent
      }
    ]
  }
,{
  path:'**',
  redirectTo:'/admin/resume'
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule { }