import { Component, OnInit } from "@angular/core";

import { SimpleRant } from "../../models/simple-rant";
import { DevrantService } from "../../services/devrant.service";


@Component({
  selector: "rants",
  templateUrl: "app/components/rants/rants.component.html",
  styleUrls: ["app/components/rants/rants.component.css"]
})

export class RantsComponent implements OnInit {
  private rants: SimpleRant[];

  constructor (private devrantService: DevrantService) { }

  ngOnInit (): void {
    this.devrantService.getRants()
      .then(rants => {
        this.rants = rants;
      })
      .catch(error => {
        // ToDo: Show Errors the User
        console.error(error);
      });
  }
}