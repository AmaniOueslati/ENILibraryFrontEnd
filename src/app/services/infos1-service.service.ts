import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Infos1ServiceService {


  constructor(private http:HttpClient) { }

  public getAllSubjectsInfos1(numsem: number, idsc: number){
    return this.http.get('http://localhost:8081/subjects/' + numsem + '/' + idsc);
  }



  downloadFile(fileId: number): Observable<HttpResponse<Blob>> {
    return this.http.get(`http://localhost:8081/downloadFile/${fileId}`, {
      responseType: 'blob',
      observe: 'response',
    });
  }


}

