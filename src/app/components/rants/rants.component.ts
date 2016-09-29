import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs/Subscription";

import { SimpleRant } from "../../models/simple-rant";
import { DevrantService } from "../../services/devrant.service";
import { ConfigExchangeService } from "../../services/config-exchange.service";


@Component({
  selector: "rants-list",
  templateUrl: "./rants.component.html",
  styleUrls: ["./rants.component.css"]
})

export class RantsComponent implements OnInit, OnDestroy {
  private rants: SimpleRant[];
  private sortModeSubscription: Subscription;
  private loadMoreSubscription: Subscription;
  private loadingComponent: Element;

  constructor (
    private devrantService: DevrantService,
    private configExchangeService: ConfigExchangeService
  ) {
    this.sortModeSubscription = configExchangeService
                                  .configChangeSortMode$.subscribe(sortMode => {
                                    this.changeSortModeAndReload(sortMode);
                                  });
    this.loadMoreSubscription = configExchangeService
                                  .configLoadMore$.subscribe(sortMode => {
                                    this.loadMoreRants(sortMode);
                                  });
  }

  ngOnInit (): void {
    this.devrantService
      .getRants(this.getMode("rant-sort-mode"), this.getMode("rant-length"))
      .then(rants => {
        this.rants = rants;
      })
      .catch(error => {
        // ToDo: Show Errors the User
        console.error(error);
      });
  }

  ngOnDestroy (): void {
    this.sortModeSubscription.unsubscribe();
    this.loadMoreSubscription.unsubscribe();
  }

  private changeSortModeAndReload (sortMode: string): void {
    this.toggleLoading(true);
    this.saveMode("rant-sort-mode", sortMode);
    this.devrantService.getRants(sortMode)
      .then(rants => {
        this.rants = null;
        this.rants = rants;
        this.toggleLoading(false);
      })
      .catch(error => {
        // ToDo: Show Errors the User
        console.error(error);
        this.toggleLoading(false);
      });
  }

  private loadMoreRants (sortMode: string): void {
    this.toggleLoading(true);
    let currentLength: string = this.rants ? this.rants.length.toString() : undefined;

    this.devrantService.getRants(sortMode, undefined, currentLength)
      .then(rants => {
        this.rants.push(...rants);
        this.saveMode("rant-length", this.rants.length.toString());
        this.toggleLoading(false);
      })
      .catch(error => {
        // ToDo: Show Errors the User
        console.error(error);
        this.toggleLoading(false);
      });
  }

  private toggleLoading (shouldShow: boolean): void {
    if (!this.loadingComponent) {
      this.loadingComponent = document.querySelector("#loading");
    }

    if (shouldShow) {
      this.loadingComponent.classList.add("is-active");
    } else {
      this.loadingComponent.classList.remove("is-active");
    }
  }

  private saveMode (key: string, value: string): void {
    if (value) {
      localStorage.setItem(key, value);
    }
  }

  private getMode (key: string): string {
    if (localStorage.getItem(key)) {
      return localStorage.getItem(key);
    }
    return undefined;
  }
}
