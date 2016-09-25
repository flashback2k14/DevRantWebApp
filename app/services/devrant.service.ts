import { Injectable } from "@angular/core";
import { Http, Response, URLSearchParams } from "@angular/http";

import "rxjs/add/operator/toPromise";

import { SimpleRant } from "../models/simple-rant";
import { FullRant } from "../models/full-rant";


@Injectable()
export class DevrantService {
  private baseUrl: string;

  constructor (private http: Http) { 
    this.baseUrl = "https://www.devrant.io/api/devrant";
  }

  getRants (sortMethod: string = "algo", limitCount: string = "10", skipCount: string = "0"): Promise<SimpleRant[]> {
    let params = new URLSearchParams();
    params.set("app", "3");
    params.set("sort", sortMethod);
    params.set("limit", limitCount);
    params.set("skip", skipCount);

    let url = `${this.baseUrl}/rants`;

    return this.http
      .get(url, {search: params})
      .toPromise()
      .then(this.extractData)
      .catch(error => error);
  }

  private extractData (res: Response) {
    let data: SimpleRant[] = res.json().rants;
    return data || { };
  }
}