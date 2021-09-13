import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Hero} from "../../interfaces";

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.scss']
})
export class HeroCardComponent implements OnInit {

  @Input() hero!: Hero
  @Output() onHeroSelect: EventEmitter<any> = new EventEmitter<any>()

  isSelected = false

  constructor() { }

  ngOnInit(): void {
  }

  selectHero(id: number) {
    this.isSelected = !this.isSelected
    this.onHeroSelect.emit(id)
    // console.log(id)
  }
}
