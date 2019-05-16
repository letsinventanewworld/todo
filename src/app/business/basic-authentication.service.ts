import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { API_URL } from "../app.constants";

export const TOKEN = "token";
export const AUTHENTICATED_USER = "authenticaterUser";
@Injectable({
  providedIn: "root"
})
export class BasicAuthenticationService {
  constructor(private http: HttpClient) {}

  isUserLoggedIn() {
    let user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
  }

  executeAuthenticationService(username, password) {
    let basicAuthenticationString =
      "Basic " + window.btoa(username + ":" + password);

    let header = new HttpHeaders({
      Authorization: basicAuthenticationString
    });
    return this.http
      .get<AuthenticationBean>(`${API_URL}/basicauth`, {
        headers: header
      })
      .pipe(
        map(data => {
          sessionStorage.setItem(AUTHENTICATED_USER, username);
          sessionStorage.setItem(TOKEN, basicAuthenticationString);
          return data;
        })
      );
  }
  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }
  getAuthenticatedToken() {
    if (this.getAuthenticatedUser()) return sessionStorage.getItem(TOKEN);
  }
}

export class AuthenticationBean {
  constructor(public message: string) {}
}
