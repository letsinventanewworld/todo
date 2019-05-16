import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

export class HelloWorldBean {
  constructor(public message: string) {}
}
@Injectable({
  providedIn: "root"
})
export class WelcomeResourceService {
  constructor(private http: HttpClient) {}

  executeHelloBeanService() {
    return this.http.get<HelloWorldBean>(
      "http://localhost:8080/hello-world-bean"
    );
  }
  executeHelloBeanWithPathVariableService(name) {
    // let basicAuthenticationString = this.createBasicAuthenticationHeader();
    // let header = new HttpHeaders({
    //   Authorization: basicAuthenticationString
    // });
    return this.http.get<HelloWorldBean>(
      `http://localhost:8080/hello-world-bean/path-variable/${name}`
      // { headers: header }
    );
  }

  // createBasicAuthenticationHeader() {
  //   let username = "tonasolution";
  //   let password = "password";
  //   let basicAuthenticationString =
  //     "Basic " + window.btoa(username + ":" + password);
  //   return basicAuthenticationString;
  // }
}
