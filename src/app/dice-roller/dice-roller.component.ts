import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { stringify } from 'querystring';

export class diceResult {
  side: number;
  result: any;
  bonus: any;
  sum: number;
}
@Component({
  selector: 'app-dice-roller',
  templateUrl: './dice-roller.component.html',
  styleUrls: ['./dice-roller.component.css']
})
export class DiceRollerComponent implements OnInit {
  showD4:boolean;showD6:boolean;showD8:boolean;showD10:boolean;showD12:boolean;showD20:boolean;showD100:boolean;showDCustom:boolean  
  diceHist = []
  diceRoll = []
  dices;
 
  constructor(fb: FormBuilder) { 
    this.dices = new FormGroup({
      d4: new FormGroup({      
        quant: new FormControl(''),
        bonus: new FormControl('')
      }),
      d6: new FormGroup({
        quant: new FormControl(''),
        bonus: new FormControl('')
      }),
      d8: new FormGroup({
        quant: new FormControl(''),
        bonus: new FormControl('')
      }),
      d10: new FormGroup({
        quant: new FormControl(''),
        bonus: new FormControl('')
      }),
      d12: new FormGroup({
        quant: new FormControl(''),
        bonus: new FormControl('')
      }),
      d20: new FormGroup({
        quant: new FormControl(''),
        bonus: new FormControl('')
      }),
      d100: new FormGroup({
        quant: new FormControl(''),
        bonus: new FormControl('')
      }),
      dCustom: new FormGroup({
        quant: new FormControl(''),
        sides: new FormControl(''),
        bonus: new FormControl('')
      }),
    });
  }

  ngOnInit(): void {
    
  }
  rollDiceResults(){   
    this.diceRoll = []    
    Object.keys(this.dices.value).forEach(key => {      
      if (this.dices.value[key].quant != ''){
        let dRolling = new diceResult()    
        dRolling.side = parseInt(key.replace("d",""))    
        if(Number.isNaN(dRolling.side)){                    
          dRolling.side = parseInt(this.dices.value[key].sides)
        }
        let rollDiceStats = new Array(parseInt(this.dices.value[key].quant)).fill(null)
        rollDiceStats = rollDiceStats.map(() => (this.rollDice(dRolling.side,1)));           
        dRolling.result = rollDiceStats            
        dRolling.bonus = parseInt(this.dices.value[key].bonus)
        console.log(isNaN(dRolling.bonus))
        if(isNaN(dRolling.bonus)){
          dRolling.sum = rollDiceStats.reduce((total, num) => total + num,0) 
        } else {
          dRolling.sum = rollDiceStats.reduce((total, num) => total + num,0)+ dRolling.bonus
        }        
        this.diceHist.push(dRolling)
        this.diceRoll.push(dRolling)           
      }    
      
    });     
    this.resetForm()    
  }
  resetForm(){
    this.dices = new FormGroup({
      d4: new FormGroup({      
        quant: new FormControl(''),
        bonus: new FormControl('')
      }),
      d6: new FormGroup({
        quant: new FormControl(''),
        bonus: new FormControl('')
      }),
      d8: new FormGroup({
        quant: new FormControl(''),
        bonus: new FormControl('')
      }),
      d10: new FormGroup({
        quant: new FormControl(''),
        bonus: new FormControl('')
      }),
      d12: new FormGroup({
        quant: new FormControl(''),
        bonus: new FormControl('')
      }),
      d20: new FormGroup({
        quant: new FormControl(''),
        bonus: new FormControl('')
      }),
      d100: new FormGroup({
        quant: new FormControl(''),
        bonus: new FormControl('')
      }),
      dCustom: new FormGroup({
        quant: new FormControl(''),
        sides: new FormControl(''),
        bonus: new FormControl('')
      }),
    });
  }
  resetHistory(){   
    this.diceHist = []
    this.diceRoll = []
    console.log(this.diceRoll,this.diceHist)
  }
  rollDice(max, min) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
