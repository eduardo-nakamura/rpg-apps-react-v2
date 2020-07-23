import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

export class diceObj {  
  quantity: number;
  side: number;
  bonus: number;
}
export class diceResult {  
  quantity: number;
  side: number;
  bonus: number;
  results: any;
  sum:number;
}
@Component({
  selector: 'app-dice-roller',
  templateUrl: './dice-roller.component.html',
  styleUrls: ['./dice-roller.component.css']
})
export class DiceRollerComponent implements OnInit {    
  dicesToRoll = []
  diceResult =[]
  diceHist =[]
  addThis = new diceObj()
  customHide = false;
  constructor() { 
     
  }
  ngOnInit(): void {

  }
  rollDiceResults(){   
    
    if(this.dicesToRoll.length > 0)   {
      this.diceResult = [];
      Object.keys(this.dicesToRoll).forEach(key => { 
        let diceRolled = new diceResult();
        diceRolled.quantity = this.dicesToRoll[key].quantity;
        diceRolled.side = this.dicesToRoll[key].side;
        diceRolled.bonus = this.dicesToRoll[key].bonus;      
        let rollDiceStats = new Array(parseInt(this.dicesToRoll[key].quantity)).fill(null)
        rollDiceStats = rollDiceStats.map(() => (this.rollDice(this.dicesToRoll[key].side,1)));   
        diceRolled.results = rollDiceStats
        console.log(diceRolled.results)
        diceRolled.sum = rollDiceStats.reduce((total, num) => total + num,0) + diceRolled.bonus
        this.diceResult.push(diceRolled)
        this.diceHist.unshift(diceRolled)
        
       })
       this.dicesToRoll = []
    }
    
  }
  resetForm(){
   
  }
  resetHistory(){   
    this.diceResult = []
    this.diceHist = []
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
