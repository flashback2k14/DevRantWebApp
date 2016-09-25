import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { SimpleRant } from "../../models/simple-rant";
import { DevrantService } from "../../services/devrant.service";


@Component({
  selector: "rants",
  templateUrl: "app/components/rants/rants.component.html",
  styleUrls: ["app/components/rants/rants.component.css"]
})

export class RantsComponent implements OnInit {
  rants: SimpleRant[];

  constructor (
    private devrantService: DevrantService,
    private router: Router
  ) { }

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

  goToProfile (userId: number): void {
    alert("Test: UserId: " + userId);
  }

  goToRant (rantId: number): void {
    let link = ["/rant", rantId];
    this.router.navigate(link);
  }
}