import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { WelcomeResourceService } from "../business/resources/welcome-resource.service";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.css"]
})
export class WelcomeComponent implements OnInit {
  private message: string = "Some Welcome Message";
  private welcomeMessageService: string;
  private welcomeErrorMessage: string;
  private name: string = "";
  constructor(
    private route: ActivatedRoute,
    private welcomeResourceService: WelcomeResourceService
  ) {}

  ngOnInit() {
    console.log(this.message);
    console.log(this.route.snapshot.params["name"]);
    this.name = this.route.snapshot.params["name"];
  }

  getWelcomeMessage() {
    console.log("Get Welcome Message");
    let resourceObserver = this.welcomeResourceService.executeHelloBeanService();
    resourceObserver.subscribe(
      response => this.handleSuccessfulResponse(response),
      errorResponse => this.handleErrorResponse(errorResponse)
    );
  }
  getWelcomeMessageWithParam() {
    let resourceObserver = this.welcomeResourceService.executeHelloBeanWithPathVariableService(
      this.name
    );
    resourceObserver.subscribe(
      response => this.handleSuccessfulResponse(response),
      errorResponse => this.handleErrorResponse(errorResponse)
    );
  }

  handleSuccessfulResponse(response) {
    this.welcomeMessageService = response.message;
  }
  handleErrorResponse(errorResponse) {
    console.log(errorResponse.error.message);
    this.welcomeErrorMessage = errorResponse.error.message;
  }
}
