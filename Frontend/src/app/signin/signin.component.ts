import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private accountService:AccountService,private router:Router) { }

  ngOnInit(): void {
  }

  email:any;
  password:any;
  designation:any;
  accntObj:any;

  login(){
    this.accountService.searchAccount(this.email)
    .subscribe(data => {
      this.accntObj = data;
      if(this.accntObj!= null)
      {
        if(this.accntObj.password == this.password && this.accntObj.designation == this.designation)
        {
          alert("Hai "+this.accntObj.firstname+",  Welcome to DressOwn.hub !!!");
          this.router.navigate(["/home"]);
        }
        else
        {
          alert("Wrong credentials, try again !!!");
        }

      }
      else
      {
        alert("Wrong credentials, try again !!!");
      }
    });
    
  }

}
