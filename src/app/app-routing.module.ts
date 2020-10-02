import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './login/register/register.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../app/login/login.module').then(mod => mod.LoginModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('../app/admin/admin.module').then(mod => mod.AdminModule)
  },
  {
    path: 'user',
    loadChildren: () => import('../app/user/user.module').then(mod => mod.UserModule)
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
