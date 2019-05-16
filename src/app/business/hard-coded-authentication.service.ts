import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class HardCodedAuthenticationService {
  constructor() {}

  authenticate(username, password) {
    if (username === "tonasolution" && password === "dummy") {
      sessionStorage.setItem("authenticaterUser", username);
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
