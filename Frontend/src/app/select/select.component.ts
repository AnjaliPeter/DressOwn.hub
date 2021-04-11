import { Component, OnInit } from '@angular/core';
import { DesignService } from '../design.service';

import * as $ from "jquery";


@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  title:any = "Explore ";

  constructor(private designService:DesignService) { }

  designs:any;

  ngOnInit(): void {
    this.designService.getDesigns()
    .subscribe(data =>
      {
        this.designs = data;
        console.log(this.designs);

        $(document).ready(function(){
          $(".trend-decor").slice(0,8).show();
          $("#loadmore-btn").on("click", function(e){
            e.preventDefault();
            $(".trend-decor:hidden").slice(0, 8).slideDown();
            if($(".trend-decor:hidden").length == 0) {
              $("#loadmore-btn").text("No more designs in this category!").addClass("noContent");
            }
          });
        });

      });
  }

}
