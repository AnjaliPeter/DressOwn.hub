import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DesignService {

  constructor(private http:HttpClient) { }

  getDesigns()
  {
    let httpHeaders = new HttpHeaders({
      "content-Type" : "application/json"
    });
    return this.http.get<any>("http://localhost:9999/designs",{headers:httpHeaders});
  }

  getOneDesign(id:any){
    let httpHeaders = new HttpHeaders({
      "content-Type" : "application/json"
    });
    return this.http.get<any>("http://localhost:9999/designs/singledesign/"+id,{headers:httpHeaders});
  }

}
