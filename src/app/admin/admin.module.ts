import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminRoutingModule} from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AptitudeComponent } from './aptitude/aptitude.component';
import { ResumeComponent } from './resume/resume.component';
import { TechnicalComponent } from './technical/technical.component';
import{AdminService} from './services/admin.service';
import { ResumeModalComponent } from './resume-modal/resume-modal.component';

@NgModule({
  declarations: [AdminComponent, AptitudeComponent, ResumeComponent, TechnicalComponent, ResumeModalComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule
  ],
  entryComponents:[ResumeModalComponent],
  providers:[AdminService]
})
export class AdminModule { }
