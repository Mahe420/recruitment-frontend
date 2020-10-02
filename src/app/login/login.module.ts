import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LoginRoutingModule } from './login-routing.module';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {LoginService} from './services/login.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule
  ],
  providers:[
    LoginService
  ]
})
export class LoginModule { }
