import { Component, OnInit } from '@angular/core';
import { StatusService } from 'src/app/services/status.service';
import Swal from 'sweetalert2';
import { AdminService } from '../services/admin.service';
import appJson from '../../user/App.json';
@Component({
  selector: 'app-aptitude',
  templateUrl: './aptitude.component.html',
  styleUrls: ['./aptitude.component.scss']
})
export class AptitudeComponent implements OnInit {
  appList;
  appJsons=appJson;
  constructor(private adminService: AdminService,private statusService:StatusService) {
  }

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.adminService.getAllApps().subscribe(data =>
      this.appList = data);
  }


  select(resume) {
    let userStatus=resume.userStatus;
    userStatus = {
      ...userStatus,
      appsStatus: true
    }

    let data ={
      id:userStatus.user.id,
      email:userStatus.user.email
    }
    this.adminService.selectEmail(data).subscribe(data=>{});
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
      this.adminService.deleteApps(resume.id).subscribe(data=>{});
      Swal.fire('Submitted', 'E-mail will be sent to the user', 'success').then(result=>{
        this.load();
      });
    });  
   
      
    }
}
