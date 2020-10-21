import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-aptitude',
  templateUrl: './aptitude.component.html',
  styleUrls: ['./aptitude.component.scss']
})
export class AptitudeComponent implements OnInit {
appList;
  constructor(private adminService:AdminService) {
    this.adminService.getAllApps().subscribe(data=>
      this.appList=data);
   }

  ngOnInit(): void {
  }

}
