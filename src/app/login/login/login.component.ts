import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { StatusService } from 'src/app/services/status.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  hide = false;
  constructor(private fb: FormBuilder,private snackBar:MatSnackBar, private statusService: StatusService, private loginService: LoginService, private router: Router) {
    this.loginForm = fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    })
  }

  ngOnInit(): void {
  }

  submit() {
    let userData;
    this.loginForm.markAllAsTouched();
    if (this.loginForm.status === 'VALID') {
      if (this.loginForm.value.username === 'admin' && this.loginForm.value.password === 'admin') {
        this.router.navigateByUrl('/admin/resume');
      }
      else {
        this.loginService.login(this.loginForm.value).subscribe(data => {
         
          if (data == null) {
            this.snackBar.open('Invalid password or username','X',{
              duration:1000
            })
          }
          else {
            this.statusService.getStatusByUser(data.user.id).subscribe(statusDetails => {
              this.statusService.changeStatus(statusDetails);
              userData = statusDetails
             
              if (userData.resumeStatus) {
                if (!userData.appTaken) {
                  console.log("redirect to apps");
                  this.router.navigateByUrl('user/apps');
                }
                else if (!userData.techTaken && userData.appsStatus) {
                  console.log("redirect tp tech");
                  this.router.navigateByUrl('user/techapps');
                }
                else {
                  console.log("wait for result");
                  this.router.navigateByUrl('user/info');
                }
              }
            });
          }
        });
      }
    }
  }


  newUser() {
    this.router.navigateByUrl('/register');
  }
}
