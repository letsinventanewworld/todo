import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

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
    return this.http.get<HelloWorldBean>(
      `http://localhost:8080/hello-world-bean/path-variable/${name}`
    );
  }
}
