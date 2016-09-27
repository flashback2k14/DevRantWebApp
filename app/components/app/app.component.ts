import { Component } from "@angular/core";

import { ConfigExchangeService } from "../../services/config-exchange.service";


@Component({
  selector: "my-app",
  templateUrl: "app/components/app/app.component.html",
  styleUrls: ["app/components/app/app.component.css"],
})

export class AppComponent {

  constructor (private configExchangeService: ConfigExchangeService) { }

  changeSort (mode: string): void {
    this.configExchangeService.changeSortMode(mode);
  }

  loadMore (rbValues: Array<boolean>): void {
    let sm = this.extractValue(rbValues);
    if (sm) {
      this.configExchangeService.loadMore(sm);
    } else {
      console.error("Something went wrong! Please retry!");
    }
  }

  // i'm sorry for this, but it works! ;-)
  private extractValue (values: Array<boolean>): string {
    if (values.length === 3) {
      if (values[0]) {
        return "algo";
      }
      if (values[1]) {
        return "recent";
      }
      if (values[2]) {
        return "top";
      }
    }
    return null;
  }
}