import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from 'src/environments/environment';
import { Observable } from 'rxjs';
const LOGIN_API = '/login';
const USER_API='/user';
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

}
