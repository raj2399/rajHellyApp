import { Component, OnInit } from "@angular/core";
import { log } from "./login";
import { user } from "../signup/signup";
import { LoginService } from "../login.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  email: string;
  pass: string;
  list: user[] = [];
  constructor(private _abc: LoginService, private _xyz: Router) {}

  ngOnInit() {}

  onSave() {
    this._abc
      .getUserById(new log(this.email, this.pass))
      .subscribe((data: user[]) => {
        console.log(data);
        if (data.length > 0) {
          this._xyz.navigate(["/profile", this.email]);
        } else {
          alert("Id & password not match");
        }
      });
  }
  onSign() {
    this._xyz.navigate(["/signup"]);
  }
  onforget(){
    this._xyz.navigate(["/forget"]);
  }
}
