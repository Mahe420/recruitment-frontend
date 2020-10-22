import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-resume-modal',
  templateUrl: './resume-modal.component.html',
  styleUrls: ['./resume-modal.component.scss']
})
export class ResumeModalComponent implements OnInit {
user;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,public dialogRef:MatDialogRef<ResumeModalComponent>) { }

  ngOnInit(): void {
    this.user=this.data.user;
  }

  close(data){
    this.dialogRef.close(data);
  }

}
