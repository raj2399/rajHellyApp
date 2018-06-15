import { Component, OnInit } from "@angular/core";
import { Route, ActivatedRoute, Router } from "@angular/router";
import { user } from "../signup/signup";
import { SignupService } from "../signup.service";
import { LoginService } from ".././login.service";
@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  email: string;
  pass: string;
  name: string;
  mob: string;
  city: string;
  gen: string;
  add: string;
  sta: string[] = ["ahmedabad", "surat", "rajkot"];

  constructor(
    private _acroute: ActivatedRoute,
    private _abc: SignupService,
    private _route: Router
  ) {}

  ngOnInit() {
    this.email = this._acroute.snapshot.params["email"];
    this._abc.getUser(this.email).subscribe((data: user[]) => {
      this.email = data[0].E_id;
      this.name = data[0].User_name;
      this.pass = data[0].Password;
      this.mob = data[0].Mob;
      this.city = data[0].City;
      this.gen = data[0].Gender;
      this.add = data[0].Address;
    });
  }
  onEdit() {
    this._route.navigate(["/EditProfile", this.email]);
  }
  oncan(){
    this._route.navigate(['/']);
  }
}
