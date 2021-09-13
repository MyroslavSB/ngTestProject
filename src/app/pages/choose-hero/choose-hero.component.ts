import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
//import {GetHeroesService} from "../../services/get-heroes.service";
import {numRegExp} from "../../utils/constants";
import {Hero} from "../../interfaces";

@Component({
  selector: 'app-choose-hero',
  templateUrl: './choose-hero.component.html',
  styleUrls: ['./choose-hero.component.scss']
})
export class ChooseHeroComponent implements OnInit {

  constructor(
    //private data: GetHeroesService
  ) { }

  letterArr = ['Q','W','E','R','T','Y','U','I','O','P', 'A','S','D','F','G','H','J','K','L', 'Z','X','C','V','B','N','M' ]
  showHeroes = false
  form!: FormGroup

  hero1: Hero = {
    damage: 56,
    energy: 53,
    hp: 74,
    intelligence: 75,
    name: "Scarlet Spider",
    speed: 60,
    strength: 46,
    isSelected: false,
    id: 0
  }
  hero2: Hero = {
    damage: 75,
    energy: 38,
    hp: 65,
    intelligence: 63,
    name: "Spider-girl",
    speed: 60,
    strength: 53,
    isSelected: false,
    id: 1
  }
  hero3: Hero = {
    damage: 75,
    energy: 38,
    hp: 65,
    intelligence: 63,
    name: "firefighter",
    speed: 60,
    strength: 53,
    isSelected: false,
    id: 2
  }

  private heroArr = [this.hero1, this.hero2, this.hero3]
  searchArr: any = []
  showKeyboard: any = false;

  initializeForm(): void {
    this.form = new FormGroup({
      search: new FormControl(''),
    })
  }

  searchValidation(): boolean {
    return numRegExp.test(this.form.get('search')?.value)
  }

  searchHeroes(): void {
    // for (let i = 0; i < this.heroArr.length; i ++) {
    //   if (!this.heroArr[i].name.toLowerCase().includes(this.form.get('search')?.value.toLowerCase())) {
    //     this.heroArr.splice(i, 1)
    //     i--
    //   }
    // }
    if (this.form.get('search')?.value === '') {
      return
    } else {
      // this.data.getHeroes()
      //   .subscribe((res: any) => console.log(res))
      this.searchArr = this.heroArr.filter(h => h.name.toLowerCase().includes(this.form.get('search')?.value.toLowerCase()))
      this.showHeroes = true
    }
  }

  ngOnInit(): void {
    this.initializeForm()
  }

  public clearInput(): void {
    this.form.get('search')?.setValue('')
    this.showHeroes = false

  }

  selectHero(id: number) {
    console.log(id)
    localStorage.setItem('selected-hero-id', id.toString())
  }
}
