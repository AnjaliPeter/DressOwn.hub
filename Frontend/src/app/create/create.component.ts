import { CdkDragHandle } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import html2canvas  from 'html2canvas';
import * as $ from "jquery";
import { data } from 'jquery';
import { PrototypeService } from '../prototype.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private prototypeService:PrototypeService) { }

  beltheight = "70";
  beltwidth = "50";

  bottomheight = "70";
  bottomwidth = "50";

  gownheight = "70";
  gownwidth = "50";

  scarfheight = "70";
  scarfwidth = "50";

  skirtheight = "70";
  skirtwidth = "50";

  topheight = "70";
  topwidth = "50";


  toggleOn1:boolean = false;
  toggleOn2:boolean = false;
  toggleOn3:boolean = true;
  toggleOn4:boolean = false;
  toggleOn5:boolean = false;
  toggleOn6:boolean = false;
  
  prototypes:any;
  
  ngOnInit(): void {

    this.prototypeService.getPrototypes()
    .subscribe(data => 
    {
      this.prototypes = data;
      console.log(this.prototypes);

    });


  }

  setMeasure(){
    alert("Your design is ready ! We will reach you with a prototype of your design, so that you can make updations if any...");
  //   const container = document.getElementById("container") as HTMLCanvasElement;
  //   const screenshot = document.getElementById("screenshot") as HTMLCanvasElement;
  //   html2canvas(container).then(function(canvas) {
  //   screenshot.appendChild(canvas);
  //  });
  }

  url = "../../assets/images/logopics/logo.png";
  selected(event:any){
    if(event.target.files != null)
    {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (e:any) => {
        this.url = e.target.result;
      }
    }
    else{
      alert("Couldn't upload your design ! Try again...");
    }
  }

}