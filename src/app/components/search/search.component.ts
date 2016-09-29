import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

import { DevrantService } from "../../services/devrant.service";
import { SimpleRant } from "../../models/simple-rant";


@Component({
  selector: "search-rants",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})

export class SearchComponent implements OnInit {
  private searchedRants: SimpleRant[];

  constructor (
    private devrantService: DevrantService,
    private route: ActivatedRoute
  ) { }

  ngOnInit (): void {
    this.route.params.forEach((params: Params) => {
      let term = params["term"];
      this.devrantService.search(term)
        .then(rants => {
          this.searchedRants = rants;
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
