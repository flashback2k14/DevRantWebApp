import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { ConfigExchangeService } from "../../services/config-exchange.service";


@Component({
  selector: "drv-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css", "../../shared/styles.css"]
})

export class AppComponent {
  private showSearch: boolean;

  constructor (
    private configExchangeService: ConfigExchangeService,
    private router: Router
  ) { 
    this.showSearch = false;
  }

  goToDevrant (): void {
    window.open("https://www.devrant.io/", "_blank");
  }

  changeSort (mode: string): void {
    this.configExchangeService.changeSortMode(mode);
  }

  searchFor (event: KeyboardEvent, searchTerm: string) {
    let keycode = event.keyCode;
    if (keycode === 13) {
      if (searchTerm.length <= 0) {
        return;
      }
      let link = ["/search", searchTerm];
      this.router.navigate(link);
    }
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
