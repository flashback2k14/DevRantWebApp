import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

import { Profile } from "../../models/profile";
import { DevrantService } from "../../services/devrant.service";


@Component({
  selector: "profile-wrapper",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css", "../../shared/styles.css"]
})

export class ProfileComponent implements OnInit {
  private profile: Profile;

  constructor (
    private devrantService: DevrantService,
    private route: ActivatedRoute
  ) { }

  ngOnInit (): void {
    this.route.params.forEach((params: Params) => {
      let id = +params["id"];
      this.devrantService.getProfile(id)
        .then(profile => {
          this.profile = profile;
        })
        .catch(error => {
          // ToDo: Show Error to the User
          console.error(error);
        });
    });
  }

  goBack (): void {
    window.history.back();
  }
}
