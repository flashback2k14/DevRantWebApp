import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

import { FullRant } from "../../models/full-rant";
import { DevrantService } from "../../services/devrant.service";


@Component({
  selector: "rant",
  template: `
    <h2>Rant</h2>

    <button (click)="goBack()">Back</button>

    <div *ngIf="rant">
      <div>{{rant.rant.id}}</div>
      <div>{{rant.rant.text}}</div>
      <pre>{{rant | json}}</pre>
    </div>
  `
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
          console.log(this.rant.rant.text);
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