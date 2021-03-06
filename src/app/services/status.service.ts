import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
const STATUS_API="/status"
@Injectable({
  providedIn: 'root'
})
export class StatusService {

  constructor(private httpClient:HttpClient) { }
  private statusSource =new BehaviorSubject<any>(null);

    status=this.statusSource.asObservable();

    
getStatusByUser(id):Observable<any>{
  return this.httpClient.get(environment.BASE_URL+STATUS_API+'/'+id);
}

updateStatus(update):Observable<any>{
  return this.httpClient.put(environment.BASE_URL+STATUS_API,update);
}


changeStatus(data){
  this.statusSource.next(data);
}

}
