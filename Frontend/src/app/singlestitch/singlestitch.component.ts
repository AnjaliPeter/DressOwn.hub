import { Component, OnInit } from '@angular/core';
import { StitchService } from '../stitch.service';
import { Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-singlestitch',
  templateUrl: './singlestitch.component.html',
  styleUrls: ['./singlestitch.component.css']
})
export class SinglestitchComponent implements OnInit {

  constructor(private stitchService:StitchService,private activatedRoute:ActivatedRoute) { }

  id:any;
  designObj:any;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => { 
      // console.log(params);
      this.id = params.get("id");
      // alert(this.id);
      this.stitchService.getOneDesign(this.id)
      .subscribe(data => {
        this.designObj = data;
        console.log(this.designObj);
      });
       
   });
  }


  sendoffer(custid:any){
    alert("Oh, That's great! Your offer has been sent to the customer ID :"+ custid +". Let's wait for her reply...");
  }

}
