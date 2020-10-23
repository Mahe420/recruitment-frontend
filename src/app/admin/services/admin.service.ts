import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
const APPS_API = '/apps';
const TECHAPPS_API = '/techapps';
const USER_STATUS_API = '/status';
const EMAIL_API='/email';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient: HttpClient) { }

  getAllApps() {
    return this.httpClient.get(environment.BASE_URL + APPS_API);
  }
  getAllTechApps() {
    return this.httpClient.get(environment.BASE_URL + TECHAPPS_API);
  }
  getAllUsers() {
    return this.httpClient.get(environment.BASE_URL + USER_STATUS_API);
  }

  deleteApps(id) {
    return this.httpClient.delete(environment.BASE_URL + APPS_API + '/' + id);
  }
  deleteTechApps(id) {
    return this.httpClient.delete(environment.BASE_URL + TECHAPPS_API + '/' + id);
  }

  rejectEmail(email){
    return this.httpClient.post(environment.BASE_URL+EMAIL_API+'/reject',email);
  }

  successEmail(email){
    return this.httpClient.post(environment.BASE_URL+EMAIL_API+'/success',email);
  }

  selectEmail(data){
    return this.httpClient.post(environment.BASE_URL+EMAIL_API+'/select',data);
  }



}
