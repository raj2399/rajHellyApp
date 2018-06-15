import { Component, OnInit } from '@angular/core';
import { log } from '../login/login';
import { Router,ActivatedRoute } from '@angular/router';
import { SignupService } from '../signup.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {
email:string;
pass:string;
  constructor(private _route:Router,private _abc:SignupService) { }

  ngOnInit() {

  }
check()
{
  this._abc.getUser(this.email).subscribe(
    (data:log[])=>{

      if(data.length>0)
      {
        this.pass=data[0].Password;
        alert("Your Password Is :"+this.pass);
      }
      else
      {
        alert("Your Email id is wrong");
      }
      this._route.navigate(['/']);
    }
  );
}
}
