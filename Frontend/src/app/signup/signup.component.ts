import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';
import { AccountModel } from './account.model';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private accountService:AccountService,private router:Router) { }

  ngOnInit(): void {
  }

  accountItem = new AccountModel("","","","","","",0);

  accntObj:any;

  addAccount()
  {
    var email = this.accountItem.email;
    this.accountService.newAccount(this.accountItem)
    .subscribe(data => {
      this.accntObj = data;
      alert(this.accntObj);
    });
    alert("Created a DressOwn.hub account successfully !!! You can signin to your account using the E-mail : "+email);
    this.router.navigate(["/signin"]);
  }


}
