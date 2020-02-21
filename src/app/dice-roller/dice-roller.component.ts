import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dice-roller',
  templateUrl: './dice-roller.component.html',
  styleUrls: ['./dice-roller.component.css']
})
export class DiceRollerComponent implements OnInit {
  showD4:boolean;showD6:boolean;showD8:boolean;showD10:boolean;showD12:boolean;showD20:boolean;showD100:boolean;showDCustom:boolean
  name = new FormControl('');
  dtype = ["d4","d6","d8","d10","d12","d20","d100","dCustom"]
  dices = new FormGroup({
    quantd4: new FormControl(),
    quantd6: new FormControl(),
    quantd8: new FormControl(),
    quantd10: new FormControl(),
    quantd12: new FormControl(),
    quantd20: new FormControl(),
    quantd100: new FormControl(),
    quantdCustom: new FormControl(),
    bonusd4: new FormControl(),
    bonusd6: new FormControl(),
    bonusd8: new FormControl(),
    bonusd10: new FormControl(),
    bonusd12: new FormControl(),
    bonusd20: new FormControl(),
    bonusd100: new FormControl(),
    bonusdCustom: new FormControl()
  });


  dices2 = new FormGroup({
    d4: new FormGroup({      
      quant: new FormControl(),
      bonus: new FormControl()
    }),
    d6: new FormGroup({
      quant: new FormControl(),
      bonus: new FormControl()
    }),
    d8: new FormGroup({
      quant: new FormControl(),
      bonus: new FormControl()
    }),
    d10: new FormGroup({
      quant: new FormControl(),
      bonus: new FormControl()
    }),
    d12: new FormGroup({
      quant: new FormControl(),
      bonus: new FormControl()
    }),
    d20: new FormGroup({
      quant: new FormControl(),
      bonus: new FormControl()
    }),
    d100: new FormGroup({
      quant: new FormControl(),
      bonus: new FormControl()
    }),
    dCustom: new FormGroup({
      quant: new FormControl(),
      sides: new FormControl(),
      bonus: new FormControl()
    }),
  });
  constructor() { }

  ngOnInit(): void {
    
  }
  rollDice(){
    
  }
  resetHistory(){

  }
}
