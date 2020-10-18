import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { StatusService } from 'src/app/services/status.service';
import app from '../App.json'
import { QuizService } from '../services/quiz.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-aptitude',
  templateUrl: './aptitude.component.html',
  styleUrls: ['./aptitude.component.scss']
})
export class AptitudeComponent implements OnInit {
  list = app;
  aptitudeForm: FormGroup;
  asd
  fields = ['answer1', 'answer2', 'answer3', 'answer4', 'answer5', 'answer6', 'answer7', 'answer8', 'answer9', 'answer10'];
  constructor(private fb: FormBuilder,private router:Router, private statusService: StatusService,private quizService:QuizService) {
    this.aptitudeForm = fb.group({
      answer1: [''],
      answer2: [''],
      answer3: [''],
      answer4: [''],
      answer5: [''],
      answer6: [''],
      answer7: [''],
      answer8: [''],
      answer9: [''],
      answer10: [''],
      userStatus: fb.group({
        id: [null]
      })
    });
  }

  ngOnInit(): void {
    
    this.statusService.status.subscribe(data => {
      data={
        ...data,
        appTaken:true
      }
      this.statusService.updateStatus(data).subscribe();
      this.aptitudeForm.patchValue({ userStatus: { id: data.id } });
    });
  }

  handleEvent(event) {
    if (event.action === 'done') {
      this.submit();
    }
  }

  submit() {
this.quizService.setAptitude(this.aptitudeForm.value).subscribe(data=>{
  console.log(data);
  Swal.fire('Submitted','For further details E-mail will be sent','success').then(result=>{
    this.router.navigateByUrl('');
  });
  
});
  }

}
