import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent implements OnInit {
  @Input()letterArr: any
  //
  // @Output() onPress: EventEmitter<string> = new EventEmitter<string>()
  // letter = ''
  //lArr = ['Q','W','E','R','T','Y','U','I','O','P', 'A','S','D','F','G','H','J','K','L', 'Z','X','C','V','B','N','M' ]
  constructor() { }

  ngOnInit(): void {
  }

  press() {

    //this.onPress.emit(`${this.le}`)
  }
}
