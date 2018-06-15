import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { user } from './signup';
import { SignupService } from '../signup.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  email:string;
  pass:string;
  name:string;
  mob:string;
  city:string;
  gen:string;
  add:string;
  sta:string[]=[
    'ahmedaba',
    'rajkot',
    'surat'
  ];
  arr:user[]=[];
  constructor(private _xyz:SignupService,private _route:Router) { }

  ngOnInit() {
  }
  onAdd()
  {
    this._xyz.addUser(new user(this.email,this.pass,this.name,this.mob,this.city,this.gen,this.add)).subscribe(
      (data:any)=>{
        this.arr.push(new user(this.email,this.pass,this.name,this.mob,this.city,this.gen,this.add));
        this._route.navigate(['/']);
      }
      );

  }
  oncan(){
    this._route.navigate(['/']);
  }
}
