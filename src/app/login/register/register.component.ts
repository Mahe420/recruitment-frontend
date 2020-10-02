import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import statesJson from './states_districts.json';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  states = statesJson;
  districts = [];
  registerForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.registerForm = fb.group({
      adhaarNo: [null,Validators.required],
      district: [null,Validators.required],
      dob: [null,Validators.required],
      email: [null,Validators.required],
      extraCurriculam: [null,Validators.required],
      gender: [null,Validators.required],
      lastName: [null,Validators.required],
      mark10: [null,Validators.required],
      mark12: [null,Validators.required],
      markPg: [null,Validators.required],
      markug: [null,Validators.required],
      others: [null,Validators.required],
      percent10: [null,Validators.required],
      percent12: [null,Validators.required],
      percentPg: [null,Validators.required],
      percentug: [null,Validators.required],
      phoneNumber: [null,Validators.required],
      state: [null,Validators.required],
      userName: [null,Validators.required]
    })
  }

  ngOnInit(): void {
  }

  onSelect(stateName) {
    this.states.forEach(value => {
      if (value.state === stateName) {
        this.districts = value.districts;
      }
    });
  }

  submit(){
    this.registerForm.markAllAsTouched();
    if (this.registerForm.status === 'VALID') {

    }
  }
}
