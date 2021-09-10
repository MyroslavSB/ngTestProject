import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GetHeroesService {

  constructor(
    private http: HttpClient,
  ) {

  }





  //getHeroes(): any {
    //this.http.get('https://testproject-3a847-default-rtdb.europe-west1.firebasedatabase.app').subscribe(res => console.log(res))
  //}
}
