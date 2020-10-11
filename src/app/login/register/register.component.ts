import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import statesJson from './states_districts.json';
const EMAIL_REG = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$";
const ADHAAR_REG = "[0-9]{12}";
const PHONE_REG = "^[0-9]{10}$";
const FLOAT_REG = "[+-]?([0-9]*[.])?[0-9]+";
const PERCENT_REG = "[+-]?([0-9]*[.])?[0-9]+%"
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  states = statesJson;
  districts = [];
  registerForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private loginService: LoginService) {
    this.registerForm = fb.group({
      adhaarNo: [null, [Validators.required, Validators.pattern(ADHAAR_REG)]],
      district: [null, Validators.required],
      dob: [null, Validators.required],
      email: [null, [Validators.required, Validators.pattern(EMAIL_REG)]],
      extraCurriculam: [null],
      gender: [null, Validators.required],
      lastName: [null, Validators.required],
      mark10: [null, [Validators.required, Validators.pattern(FLOAT_REG)]],
      mark12: [null, [Validators.required, Validators.pattern(FLOAT_REG)]],
      markPg: [null, [Validators.required, Validators.pattern(FLOAT_REG)]],
      markug: [null, [Validators.required, Validators.pattern(FLOAT_REG)]],
      others: [null],
      percent10: [null, [Validators.required, Validators.pattern(PERCENT_REG)]],
      percent12: [null, [Validators.required, Validators.pattern(PERCENT_REG)]],
      percentPg: [null, [Validators.required, Validators.pattern(PERCENT_REG)]],
      percentug: [null, [Validators.required, Validators.pattern(PERCENT_REG)]],
      phoneNumber: [null, [Validators.required, Validators.pattern(PHONE_REG)]],
      state: [null, Validators.required],
      userName: [null, Validators.required]
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

  submit() {
    this.registerForm.markAllAsTouched();
    let data;
    if (this.registerForm.status === 'VALID') {
      data = this.registerForm.value;
      data = {
        ...data,
        dob: data.dob.toLocaleDateString()
      }
    }
    this.loginService.addUser(data).subscribe(element => {
      Swal.fire('Success', 'You have registered.Wait for email for futher details', 'success');
      this.router.navigateByUrl('');
    },
      error => {
        Swal.fire('Failure', error.error, 'error');
      })
  }

  back() {
    this.router.navigateByUrl('');
  }
}
