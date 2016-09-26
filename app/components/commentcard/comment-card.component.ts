import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

import { RantComment } from "../../models/rant-comment";


@Component({
  selector: "comment-card",
  templateUrl: "app/components/commentcard/comment-card.component.html",
  styleUrls: ["app/components/commentcard/comment-card.component.css"]
})

export class CommentcardComponent {
  @Input() comment: RantComment;

  constructor (private router: Router) { }

  goToProfile (userId: number): void {
    let link = ["/profile", userId];
    this.router.navigate(link);
  }
}