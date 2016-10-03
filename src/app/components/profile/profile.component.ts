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
  private showRants: boolean;
  private showUpvoted: boolean;
  private showComments: boolean;
  private showFavs: boolean;

  constructor (
    private devrantService: DevrantService,
    private route: ActivatedRoute
  ) { 
    this.showRants = false;
    this.showUpvoted = false;
    this.showComments = false;
    this.showFavs = false;
  }

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
