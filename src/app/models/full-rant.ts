import { SimpleRant } from "./simple-rant";
import { RantComment } from "./rant-comment";


export class FullRant {
  rant: SimpleRant;
  comments: RantComment[];
  success: boolean;
}