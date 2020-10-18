import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StatusService } from 'src/app/services/status.service';
import Swal from 'sweetalert2';
import { QuizService } from '../services/quiz.service';
import tech from '../Tech.json';
@Component({
  selector: 'app-techapps',
  templateUrl: './techapps.component.html',
  styleUrls: ['./techapps.component.scss']
})
export class TechappsComponent implements OnInit {
  list = tech;
  technicalForm:FormGroup;
  fields=['answer1','answer2','answer3','answer4','answer5','answer6','answer7','answer8','answer9','answer10'];
  constructor(private fb:FormBuilder,private router:Router, private statusService: StatusService,private quizService:QuizService) {
    this.technicalForm=fb.group({
      answer1:[''],
      answer2:[''],
      answer3:[''],
      answer4:[''],
      answer5:[''],
      answer6:[''],
      answer7:[''],
      answer8:[''],
      answer9:[''],
      answer10:[''],
      userStatus:fb.group({
        id:[null]
      })
    });
   }

  ngOnInit(): void {
    this.statusService.status.subscribe(data => {
      data={
        ...data,
        techTaken:true
      }
      this.statusService.updateStatus(data).subscribe();
      this.technicalForm.patchValue({ userStatus: { id: data.id } });
    });
  }

  handleEvent(event){
    if(event.action==='done'){
    this.submit();
  }
}
submit() {
  this.quizService.setTechnicalAptitude(this.technicalForm.value).subscribe(data=>{
    Swal.fire('Submitted','For further details E-mail will be sent','success').then(result=>{
      this.router.navigateByUrl('');
    });
    });
}
}
