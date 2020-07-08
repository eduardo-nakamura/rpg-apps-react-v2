import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

export interface diceTable {
  quantity: number;
  side: number;
  bonus: number;

}
export class diceResult {
  result: any;
  bonus: any;
  sum: number;
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
  diceHistoric=[];
  diceLast=[];
  
  displayedColumns: string[] = ['quantity', 'side', 'bonus'];
  dataSource = new MatTableDataSource<diceTable>(ELEMENT_DATA);
  dicesToRoll = []
  addThis = new diceObj()
  constructor() { 
     
  }
  ngOnInit(): void {

  }
  rollDiceResults(){       
    
    if(this.dicesToRoll.length > 0){
      this.diceLast = []
      Object.keys(this.dicesToRoll).forEach(key => {    
        let thisDice = new diceResult()   
        let rollDice = new Array(parseInt(this.dicesToRoll[key].quantity)).fill(null);
        rollDice = rollDice.map(() => (this.rollDice(this.dicesToRoll[key].side,1)));  
        thisDice.result = rollDice
        thisDice.bonus = this.dicesToRoll[key].bonus    
        thisDice.sum =  thisDice.result.reduce((total, num) => total + num,0) + thisDice.bonus
        this.diceHistoric.push(thisDice)
        this.diceLast.push(thisDice)
      })
      this.resetForm()
    }
    
  }
  resetForm(){
    this.dataSource.data = [];
    this.dicesToRoll = []
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
    if(newDie.quantity > 0 && isNaN(newDie.side) != true){
      this.dicesToRoll.push(newDie);
      // this.dataSource.data.push(newDie)
    }
    this.addThis = new diceObj()      
    this.dataSource = new MatTableDataSource<diceTable>(this.dicesToRoll);  
  }
  removeDuplicates(array, key) {
    let lookup = new Set();
    return array.filter(obj => !lookup.has(obj[key]) && lookup.add(obj[key]));
  }  
}
