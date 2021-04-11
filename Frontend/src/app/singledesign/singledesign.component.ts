import { Component, OnInit } from '@angular/core';
import { DesignService } from '../design.service';
import { Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-singledesign',
  templateUrl: './singledesign.component.html',
  styleUrls: ['./singledesign.component.css']
})
export class SingledesignComponent implements OnInit {

  constructor(private designService:DesignService,private activatedRoute:ActivatedRoute) { }

  id:any;
  designObj:any;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => { 
      // console.log(params);
      this.id = params.get("id");
      // alert(this.id);
      this.designService.getOneDesign(this.id)
      .subscribe(data => {
        this.designObj = data;
        console.log(this.designObj);
      });
       
   });
  }

  setMeasure(){
    alert("Your design is ready ! We will reach you with a prototype of your design, so that you can make updations if any...");
  }

}
