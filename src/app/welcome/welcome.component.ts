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
    resourceObserver.subscribe(response =>
      this.handleSuccessfulResponse(response)
    );
  }

  handleSuccessfulResponse(response) {
    this.welcomeMessageService = response.message;
  }
}
