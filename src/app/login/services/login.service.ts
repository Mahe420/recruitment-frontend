import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from 'src/environments/environment';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
const LOGIN_API = '/login';
const USER_API='/user';
const STATUS_API='/status';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

    constructor(private httpClient: HttpClient) { }
   
  
    public login(data) :Observable<any>{
      return this.httpClient.post(environment.BASE_URL+LOGIN_API,data);
    }
    public addUser(data):Observable<any>{
      return this.httpClient.post(environment.BASE_URL+USER_API,data);
    }
    public getStatus(id):Observable<any>{
      return this.httpClient.get(environment.BASE_URL+STATUS_API+'/'+id);
    }


}
