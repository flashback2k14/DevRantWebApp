import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

import { SimpleRant } from "../../models/simple-rant";


@Component({
  selector: "rant-card",
  templateUrl: "app/components/rantcard/rant-card.component.html",
  styleUrls: ["app/components/rantcard/rant-card.component.css"]
})

export class RantcardComponent {
  @Input() rant: SimpleRant;
  @Input() imgHeight: number;
  @Input() imgWidth: number;

  constructor (private router: Router) { 
    this.imgHeight = 200;
    this.imgWidth = 200;
  }

  goToProfile (userId: number): void {
    let link = ["/profile", userId];
    this.router.navigate(link);
  }

  goToRant (rantId: number): void {
    let link = ["/rant", rantId];
    this.router.navigate(link);
  }

  searchForTag (tag: string) {
    let link = ["/search", tag];
    this.router.navigate(link);
  }
}