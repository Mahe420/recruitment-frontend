import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StatusService } from 'src/app/services/status.service';
import Swal from 'sweetalert2';
import { ResumeModalComponent } from '../resume-modal/resume-modal.component';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  resumeList;
  constructor(private adminService: AdminService, private statusService: StatusService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.load();
  }

  open(resume) {
    const dialogRef = this.dialog.open(ResumeModalComponent, { data: resume, panelClass: 'dialog-class', autoFocus: false })
    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        this.select(resume);
      }
      else if( typeof data === 'boolean' && !data) {
        this.reject(resume);
      }
    });
  }

  load() {
    this.adminService.getAllUsers().subscribe(data =>
      this.resumeList = data);
  }
  select(resume) {

    resume = {
      ...resume,
      resumeStatus: true
    }

     this.statusService.updateStatus(resume).subscribe(data=>{
       console.log(data);
      Swal.fire('Submitted','E-mail will be sent to the user','success').then(result=>
        this.load());
    })
  }
  reject(resume) {

    resume = {
      ...resume,
      rejected: true
    }

    this.statusService.updateStatus(resume).subscribe(data=>{
      Swal.fire('Submitted','E-mail will be sent to the user','success').then(result=>
        this.load());
    })
  }
}
