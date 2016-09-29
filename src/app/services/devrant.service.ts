import { Injectable } from "@angular/core";
import { Http, Response, URLSearchParams } from "@angular/http";

import "rxjs/add/operator/toPromise";

import { SimpleRant } from "../models/simple-rant";
import { FullRant } from "../models/full-rant";
import { Profile } from "../models/profile";


@Injectable()
export class DevrantService {
  private baseUrl: string;

  constructor (private http: Http) { 
    this.baseUrl = "https://www.devrant.io/api";
  }

  getRants (sortMethod: string = "algo", 
            limitCount: string = "50", 
            skipCount: string = "0"): Promise<SimpleRant[]> {

    let params = new URLSearchParams();
    params.set("app", "3");
    params.set("sort", sortMethod);
    params.set("limit", limitCount);
    params.set("skip", skipCount);

    return this.http
      .get(`${this.baseUrl}/devrant/rants`, {search: params})
      .toPromise()
      .then(this.extractRantsData)
      .catch(error => error);
  }

  getRant (id: number): Promise<FullRant> {
    return this.http
      .get(`${this.baseUrl}/devrant/rants/${id}?app=3`)
      .toPromise()
      .then(this.extractRantData)
      .catch(error => error);
  }

  getProfile (id: number): Promise<Profile> {
    return this.http
      .get(`${this.baseUrl}/users/${id}?app=3`)
      .toPromise()
      .then(this.extractProfileData)
      .catch(error => error);
  }

  search (term: string): Promise<SimpleRant[]> {
    let params = new URLSearchParams();
    params.set("app", "3");
    params.set("term", term);

    return this.http
      .get(`${this.baseUrl}/devrant/search`, {search: params})
      .toPromise()
      .then(this.extractSearchData)
      .catch(error => error);
  }

  private extractRantsData (res: Response) {
    let data: SimpleRant[] = res.json().rants;
    return data || { };
  }

  private extractRantData (res: Response) {
    let data: FullRant = res.json();
    return data || { };
  }

  private extractProfileData (res: Response) {
    let data: Profile = res.json().profile;
    return data || { };
  }

  private extractSearchData (res: Response) {
    let data: SimpleRant[] = res.json().results;
    return data || { };
  }
}