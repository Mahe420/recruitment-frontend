import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{environment} from '../../../environments/environment';
const TECHNICAL_API='/techapps';
const APTITUDE_API='/apps';
@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private httpClient:HttpClient) { }

  setAptitude(data):Observable<any>{
      return this.httpClient.post(environment.BASE_URL+APTITUDE_API,data);
  }

  setTechnicalAptitude(data):Observable<any>{
      return this.httpClient.post(environment.BASE_URL+TECHNICAL_API,data);
  }
}