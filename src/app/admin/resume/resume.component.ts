import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
resumeList;
  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    this.adminService.getAllUsers().subscribe(data=>
      this.resumeList=data);
  }

}
