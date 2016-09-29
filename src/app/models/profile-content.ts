import { SimpleRant } from "./simple-rant";
import { RantComment } from "./rant-comment";


export class ProfileContent {
  content: {
    rants: SimpleRant[];
    upvoted: SimpleRant[];
    comments: RantComment[];
    favorites: any;
  };
  counts: {
    rants: number;
    upvoted: number;
    comments: number;
    favorites: number;
  };
}
