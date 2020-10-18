import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {UserRoutingModule} from './user.routing.module';
import { CountdownModule } from 'ngx-countdown';
import { LoginService } from '../login/services/login.service';
import {QuizService} from './services/quiz.service';
@NgModule({
  declarations: [
  ],
  imports: [
    CountdownModule,
    CommonModule,
    UserRoutingModule
  ],
  providers:[
    LoginService,
    QuizService
  ]
})
export class UserModule { }
