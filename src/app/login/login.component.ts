import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  username: string = "tonasolution";
  password: string = "";
  errorMessage: string = "Invalid Credentials";
  invalidLogin: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {}

  handleLogin() {
    if (this.username === "tonasolution" && this.password === "dummy") {
      this.router.navigate(["welcome", this.username]);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }
}
