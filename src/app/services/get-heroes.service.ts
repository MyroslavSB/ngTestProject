import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class GetHeroesService {

  constructor(private http: HttpClient) { }

  getHeroes(): any {
    return this.http.get(`${environment.fbDbUrl}`)
  }
}
