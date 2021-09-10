import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.scss']
})
export class HeroCardComponent implements OnInit {
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
  heroArr = [
    this.hero1,
    this.hero2
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
