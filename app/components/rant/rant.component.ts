import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

import { FullRant } from "../../models/full-rant";
import { DevrantService } from "../../services/devrant.service";


@Component({
  selector: "rant",
  templateUrl: "app/components/rant/rant.component.html",
  styleUrls: ["app/components/rant/rant.component.css"]
})

export class RantComponent implements OnInit {
  rant: FullRant;
  
  constructor (
    private devrantService: DevrantService,
    private route: ActivatedRoute
  ) { }

  ngOnInit (): void {
    this.route.params.forEach((params: Params) => {
      let id = +params["id"];
      this.devrantService.getRant(id)
        .then(rant => {
          this.rant = rant;
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