import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";


@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $("#btnradio1").attr({"class":"active"});
  }

  select(){
    $("#btnradio1").attr({"class":"active"});
    $("#btnradio2").attr({"class":"inactive"});
  }

  create(){
    $("#btnradio2").attr({"class":"active"});
    $("#btnradio1").attr({"class":"inactive"});
  }

}
