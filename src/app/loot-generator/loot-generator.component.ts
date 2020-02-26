import { Component, OnInit, ɵConsole } from '@angular/core';
import { ApiService } from '../api.service';
import { RouteConfigLoadEnd } from '@angular/router';

export class diceResult {
  money: string;
  gemArts: string;
  magItems: string;  
}
@Component({
  selector: 'app-loot-generator',
  templateUrl: './loot-generator.component.html',
  styleUrls: ['./loot-generator.component.css']
})
export class LootGeneratorComponent implements OnInit {

  constructor(private apiService: ApiService) { }
  lootSelected: any
  lootShow = {
    money:"",
    gemArts:"",
    magItems: ""
  }
  ngOnInit(): void {

  }
  genLoot(lootType) {  
    this.reset()
    let rollLoot = this.rollDice(100)          
    this.switch(lootType)  
    setTimeout(() => {
      let filterLoot = this.lootSelected.filter(function(hero) {
        return hero.roll >= rollLoot;
      });
      let teste = filterLoot[0]         
      console.log(teste)
      Object.keys(teste).forEach(key => {              
        if(teste[key].quant){
          let rollDiceStats = new Array(parseInt(teste[key].quant)).fill(null)
          rollDiceStats = rollDiceStats.map(() => (this.rollDice(teste[key].sides,1)));          
          let lootRoll = rollDiceStats.reduce((total, num) => total + num,0)
          console.log(rollDiceStats,lootRoll)
          if(key == "piece1"){
            this.lootShow.money += lootRoll * teste[key].multiply 
            this.lootShow.money += ` ${teste[key].type }`
          }
          if(key == "piece2"){
            this.lootShow.money += ", "+ lootRoll * teste[key].multiply 
            this.lootShow.money += ` ${teste[key].type }`
          }
          if(key == "gemArt"){               
            switch(teste[key].table){
              case "10GP":
              case "50GP":
              case "100GP":
              case "500GP":
              case "1000GP":
              case "5000GP":
              break;
              case "25GP":
              case "250GP":
              case "750GP":
              case "2500GP":
              case "7500GP":
                // this.apiService.art().subscribe((data:any) => {        
            
                // }); 
                break;
            }
            console.log(teste[key].type)
            this.lootShow.gemArts += lootRoll 
          }
        }
        
        // let rollDiceStats = new Array(teste[key].quant.fill(null))
        

      });          
    }, 500);
  }
  switch(lootType){    
    
    switch(lootType){
      case 1:
        this.apiService.getLootIndividual0to4().subscribe((data:any) => {        
          return this.lootSelected = data
        }); 
        break;
      case 2:
        this.apiService.getLootIndividual5to10().subscribe((data:any) => {               
          return this.lootSelected = data
        }); 
        break;
      case 3:
        this.apiService.getLootIndividual11to16().subscribe((data:any) => {        
          return this.lootSelected = data
        }); 
        break;
      case 4:
        this.apiService.getLootIndividual17plus().subscribe((data:any) => {        
          return this.lootSelected = data
        }); 
        break;
      case 5:
         this.apiService.getLootHoard0to4().subscribe((data:any) => {        
          return this.lootSelected = data
        });   
      break;
      case 6:
         this.apiService.getLootHoard5to10().subscribe((data:any) => {        
          return this.lootSelected = data
        });   
      break;
      case 7:
         this.apiService.getLootHoard11to16().subscribe((data:any) => {        
          return this.lootSelected = data
        });   
      break;
      case 8:
         this.apiService.getLootHoard17plus().subscribe((data:any) => {        
          return this.lootSelected = data
        });   
      break;
    }    
    
  }
  reset(){
    this.lootShow = {
      money:"",
      gemArts:"",
      magItems: ""
    }
  }
  rollDice(max, min = 1) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
