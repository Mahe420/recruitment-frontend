import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {UserRoutingModule} from './user.routing.module';
import { CountdownModule } from 'ngx-countdown';
@NgModule({
  declarations: [
  ],
  imports: [
    CountdownModule,
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
