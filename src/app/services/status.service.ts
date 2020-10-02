import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
const STATUS_API="/status"
@Injectable({
  providedIn: 'root'
})
export class StatusService {

  constructor(private httpClient:HttpClient) { }

getStatusByUser(id):Observable<any>{
  return this.httpClient.get(environment.BASE_URL+STATUS_API+'/'+id);
}

}
