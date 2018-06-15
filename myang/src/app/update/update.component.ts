import { Component, OnInit } from "@angular/core";
import { SignupService } from "../signup.service";
import { user } from "../signup/signup";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-update",
  templateUrl: "./update.component.html",
  styleUrls: ["./update.component.css"]
})
export class UpdateComponent implements OnInit {
  email: string;
  pass: string;
  name: string;
  mob: string;
  city: string;
  gen: string;
  add: string;
  sta: string[] = ["ahmedabad", "surat", "rajkot"];
  arr:user[]=[

  ];
  constructor(
    private _abc: SignupService,
    private _acroute: ActivatedRoute,
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

      }
    );
  }
  onview() {
    this._route.navigate(["/profile",this.email]);
  }
  onSave()
  {
    this._abc.updateUser(new user(this.email,this.name,this.pass,this.mob,this.city,this.gen,this.add),this.email).subscribe(
      (data:any)=>{
        this._route.navigate(['/profile',this.email]);
      }
    );
  }
  onChange() {
    this._route.navigate(["/changepass"]);
  }
}
