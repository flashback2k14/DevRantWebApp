import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";


@Injectable()
export class ConfigExchangeService {
  private configChangeSortModeSource = new Subject<string>();
  private configLoadMoreSource = new Subject<string>();

  configChangeSortMode$ = this.configChangeSortModeSource.asObservable();
  configLoadMore$ = this.configLoadMoreSource.asObservable();

  changeSortMode (sortMethod: string): void {
    this.configChangeSortModeSource.next(sortMethod);
  }

  loadMore (sortMethod: string): void {
    this.configLoadMoreSource.next(sortMethod);
  }
}
