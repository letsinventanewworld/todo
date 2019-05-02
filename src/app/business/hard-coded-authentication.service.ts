import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class HardCodedAuthenticationService {
  constructor() {}

  authenticate(username, password) {
    // console.log("Before " + this.isUserLoggedIn());
    if (username === "tonasolution" && password === "dummy") {
      sessionStorage.setItem("authenticaterUser", username);
      // console.log("After " + this.isUserLoggedIn());
      return true;
    }
    return false;
  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem("authenticaterUser");
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem("authenticaterUser");
  }
}
