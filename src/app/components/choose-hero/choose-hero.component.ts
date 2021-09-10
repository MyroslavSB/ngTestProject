import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {GetHeroesService} from "../../services/get-heroes.service";

@Component({
  selector: 'app-choose-hero',
  templateUrl: './choose-hero.component.html',
  styleUrls: ['./choose-hero.component.scss']
})
export class ChooseHeroComponent implements OnInit {

  constructor(
    private data: GetHeroesService,
  ) { }

  showHeroes = false
  form!: FormGroup

  hero1 = {
    damage: 56,
    energy: 53,
    hp: 74,
    intelligence: 75,
    name: "Scarlet Spider",
    speed: 60,
    strength: 46
  }
  hero2 = {
    damage: 75,
    energy: 38,
    hp: 65,
    intelligence: 63,
    name: "Spider-girl",
    speed: 60,
    strength: 53
  }
  hero3 = {
    damage: 75,
    energy: 38,
    hp: 65,
    intelligence: 63,
    name: "firefighter",
    speed: 60,
    strength: 53
  }

  public heroArr = [this.hero1, this.hero2, this.hero3]

  searchHeroes(): any {
    for (let i = 0; i < this.heroArr.length; i ++) {
      if (!this.heroArr[i].name.toLowerCase().includes(this.form.get('search')?.value.toLowerCase())) {
        this.heroArr.splice(i, 1)
        i--
      }
    }
    this.showHeroes = true
  }

  initializeForm(): void {
    this.form = new FormGroup({
      search: new FormControl(''),
    })
  }



  ngOnInit(): void {
    this.initializeForm()
  }

  public clearInput(): void {
    this.form.get('search')?.setValue('')
    this.showHeroes = false
  }
}
