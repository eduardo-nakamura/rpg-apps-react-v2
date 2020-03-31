import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

export interface diceTable {
  quantity: number;
  side: number;
  bonus: number;

}

const ELEMENT_DATA: diceTable[] = [
  // {side: 1, quantity: 1, bonus: 1},

];
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
  displayedColumns: string[] = ['quantity', 'side', 'bonus'];
  dataSource = new MatTableDataSource<diceTable>(ELEMENT_DATA);
  dicesToRoll = [
   
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
  addDice(diceSetValue,qty = 1, bonus = 0){    
    let newDie = new diceObj();
    newDie.quantity = Number(qty);
    newDie.side = Number(diceSetValue);
    newDie.bonus = Number(bonus);  
    // console.log(newDie.quantity != null && newDie.side != null)
    if(newDie.quantity > 0 && isNaN(newDie.side) != true){
      this.dicesToRoll.push(newDie);
      ELEMENT_DATA.push(newDie)
    }
    let remode = this.removeDuplicates(this.dicesToRoll, 'side')     
    this.dicesToRoll = remode 
    this.addThis = new diceObj()
    
    this.dataSource = new MatTableDataSource<diceTable>(ELEMENT_DATA);
    console.log(this.dataSource.data)
  }
  removeDuplicates(array, key) {
    let lookup = new Set();
    return array.filter(obj => !lookup.has(obj[key]) && lookup.add(obj[key]));
  }  
}
