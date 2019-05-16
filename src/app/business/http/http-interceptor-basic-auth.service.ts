import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from "@angular/common/http";
import { Observable } from "rxjs";
import { BasicAuthenticationService } from "../basic-authentication.service";

@Injectable({
  providedIn: "root"
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor {
  constructor(private basicAuthenticationService: BasicAuthenticationService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    // let username = "tonasolution";
    // let password = "password";
    // let basicAuthenticationString =
    //   "Basic " + window.btoa(username + ":" + password);

    let basicAuthenticationString = this.basicAuthenticationService.getAuthenticatedToken();
    let username = this.basicAuthenticationService.getAuthenticatedUser;

    if (basicAuthenticationString && username) {
      request = request.clone({
        setHeaders: {
          Authorization: basicAuthenticationString
        }
      });
    }

    return next.handle(request);
  }
}
