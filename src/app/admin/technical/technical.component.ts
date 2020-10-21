import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-technical',
  templateUrl: './technical.component.html',
  styleUrls: ['./technical.component.scss']
})
export class TechnicalComponent implements OnInit {
techList;
  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    this.adminService.getAllTechApps().subscribe(data=>
      this.techList=data);
  }

}
