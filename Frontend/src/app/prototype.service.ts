import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PrototypeService {

  constructor(private http:HttpClient) { }

  getPrototypes()
  {
    let httpHeaders = new HttpHeaders({
      "content-Type" : "application/json"
    });
    return this.http.get<any>("http://localhost:9999/prototypes",{headers:httpHeaders});
  }

}
