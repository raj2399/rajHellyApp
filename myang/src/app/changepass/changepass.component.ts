import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { log } from '../login/login';
import { Router,ActivatedRoute } from '@angular/router';
import { SignupService } from '../signup.service';
import { user } from '../signup/signup';
@Component({
  selector: 'app-changepass',
  templateUrl: './changepass.component.html',
  styleUrls: ['./changepass.component.css']
})
export class ChangepassComponent implements OnInit {
email:string;
pass:string;
pass1:string;
pass2:string;
name:string;
mob:string;
city:string;
gen:string;
add:string;
  constructor(private _xyz:LoginService,private _abc:Router,private _sign:SignupService) { }

  ngOnInit() {
  }
  onSave(){
    this._xyz
    .getUserById(new log(this.email, this.pass))
    .subscribe((data:user[]) => {
      console.log(data);
      if (data.length > 0) {
          if(this.pass1==this.pass2){
            this.email=data[0].E_id;
            this.mob=data[0].Mob;
            this.name=data[0].User_name;
            this.city=data[0].City;
            this.gen=data[0].Gender;
            this.add=data[0].Address;
            this._sign.updateUser(new user(this.email,this.name,this.pass1,this.mob,this.city,this.gen,this.add),this.email).subscribe(

              (data:any)=>{
                console.log(this.pass1);
                this._abc.navigate(['/']);
              }
            );
          }
          else
          {
            alert("Password missmatch");
          }
      }
      else {
        alert("Id & old password wrong");
      }
    });


  }
  oncan(){
    this._abc.navigate(['/']);
  }
}
