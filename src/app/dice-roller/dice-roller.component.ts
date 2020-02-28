import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

export class diceObj {  
  quantity: number;
  side: number;
  bonus: number;
}

@Component({
  selector: 'app-dice-roller',
  templateUrl: './dice-roller.component.html',
  styleUrls: ['./dice-roller.component.css']
})
export class DiceRollerComponent implements OnInit {  
  dicesToRoll = [
    { "quantity": undefined, "side": undefined, "bonus": undefined }
  ]
  addThis = new diceObj()
  constructor() { 
     
  }
  ngOnInit(): void {

  }
  rollDiceResults(){       

  }
  resetForm(){
 
  }
  resetHistory(){   
  
  }
  rollDice(max, min) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  addDice(diceSetValue,qty = 1, bonus = undefined){    
    let newDie = new diceObj();
    newDie.quantity = Number(qty);
    newDie.side = Number(diceSetValue);
    newDie.bonus = Number(bonus);
    console.log('quantity',newDie.quantity);
    console.log('side',isNaN(newDie.side) != true);
    // console.log(newDie.quantity != null && newDie.side != null)
    if(newDie.quantity > 0 && isNaN(newDie.side) != true){
      this.dicesToRoll.push(newDie);
    }
    let remode = this.removeDuplicates(this.dicesToRoll, 'side')     
    this.dicesToRoll = remode 
    this.addThis = new diceObj()
  }
  removeDuplicates(array, key) {
    let lookup = new Set();
    return array.filter(obj => !lookup.has(obj[key]) && lookup.add(obj[key]));
  }  
}
