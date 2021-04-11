import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StitchService {

  constructor(private http:HttpClient) { }

  getDesigns()
  {
    let httpHeaders = new HttpHeaders({
      "content-Type" : "application/json"
    });
    return this.http.get<any>("http://localhost:9999/stitch",{headers:httpHeaders});
  }

  getOneDesign(id:any){
    let httpHeaders = new HttpHeaders({
      "content-Type" : "application/json"
    });
    return this.http.get<any>("http://localhost:9999/stitch/singledesign/"+id,{headers:httpHeaders});
  }

}
