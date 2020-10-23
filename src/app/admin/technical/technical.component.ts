import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import techJson from '../../user/Tech.json';
import { StatusService } from 'src/app/services/status.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-technical',
  templateUrl: './technical.component.html',
  styleUrls: ['./technical.component.scss']
})
export class TechnicalComponent implements OnInit {
techList;
techJsons=techJson;
constructor(private adminService: AdminService,private statusService:StatusService) {
}

ngOnInit(): void {
  this.load();
}

load() {
  this.adminService.getAllTechApps().subscribe(data =>
    this.techList = data);
}


select(resume) {
  let userStatus=resume.userStatus;
  userStatus = {
    ...userStatus,
    techAppsStatus: true
  }
  this.adminService.successEmail(resume.userStatus.user.email).subscribe(ele=>{});
  this.statusService.updateStatus(userStatus).subscribe(data => {
    Swal.fire('Submitted', 'E-mail will be sent to the user', 'success').then(result =>
      this.load());
  })
}
reject(resume) {
  let userStatus=resume.userStatus;
  userStatus = {
    ...userStatus,
    rejected: true
  }
  
  this.adminService.rejectEmail(userStatus.user.email).subscribe(ele=>{});
    this.statusService.updateStatus(userStatus).subscribe(data=>{
      this.adminService.deleteTechApps(resume.id).subscribe(data=>{});
      Swal.fire('Submitted', 'E-mail will be sent to the user', 'success').then(result=>{
        this.load();
      });
    });
  }
}
