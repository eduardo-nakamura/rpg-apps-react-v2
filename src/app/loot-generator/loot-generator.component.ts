import { Component, OnInit, ɵConsole } from '@angular/core';
import { ApiService } from '../api.service';
import { RouteConfigLoadEnd } from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';

export interface ConvertTable {
  cobre: number;
  prata: number;
  electrum: number;
  ouro: number;
  platina: number;
}
export class diceResult {
  money: string;
  gemArts: string;
  magItems: string;  
}

const ELEMENT_DATA: ConvertTable[] = [
  {cobre: 0,prata: 0,electrum: 0,ouro: 0,platina: 0}
];

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
    magItems: []
  }
  lootNone = false
  // conversor
  public selectOptions = ['Cobre','Prata','Electrum', 'Ouro', 'Platina'];
  public selectedOption = "Escolha uma Moeda";
  displayedColumnsConvert: string[] = ['cobre','prata','electrum', 'ouro', 'platina'];
  dataSourceConvert = new MatTableDataSource<ConvertTable>(ELEMENT_DATA);
  valorToConvert;
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
      let lootChosen = filterLoot[0]               
      Object.keys(lootChosen).forEach(key => {              
        if(lootChosen[key].quant){
          let rollDiceStats = new Array(parseInt(lootChosen[key].quant)).fill(null)
          rollDiceStats = rollDiceStats.map(() => (this.rollDice(lootChosen[key].sides,1)));          
          let lootRoll = rollDiceStats.reduce((total, num) => total + num,0)          
          if(key == "piece1"){
            this.lootShow.money += lootRoll * lootChosen[key].multiply 
            this.lootShow.money += ` ${lootChosen[key].type }`
          }
          if(key == "piece2"){
            this.lootShow.money += ", "+ lootRoll * lootChosen[key].multiply 
            this.lootShow.money += ` ${lootChosen[key].type }`
          }
          if(key == "gemArt"){               
            let gemOrArt:any     
            if(lootChosen[key].type == "Gemas"){
              this.apiService.gems().subscribe((data:any) => {        
                return gemOrArt = data[lootChosen[key].table]
              }); 
            } else {
              this.apiService.art().subscribe((data:any) => {        
                return gemOrArt = data[lootChosen[key].table]
              }); 
            }
            setTimeout(() => {              
              let randomItem = new Array(parseInt(lootRoll)).fill(null)
              randomItem = randomItem.map(() => (" " + gemOrArt[this.rollDice(gemOrArt.length - 1)]));             
              this.lootShow.gemArts += randomItem
              this.lootShow.gemArts += ` (${randomItem.length * parseInt(lootChosen[key].table)} GP Total)`
            }, 300);            
          }
          if(key == "magItemA" || key == "magItemB"){   
            let selectedTable:any     
            this.apiService.magItem().subscribe((data:any) => {               
              selectedTable = data[lootChosen[key].table]              
            });             

            setTimeout(() => {        
              let quantItems = this.rollDice(lootChosen[key].sides)
           
              let magItems = new Array(quantItems).fill("")
              
              for(let i = 0; i < quantItems; i++){
                let rollMagItem = this.rollDice(100)
                let magItem = selectedTable.filter(function(hero) {
                  return hero.roll >= rollMagItem;
                });
                
                magItems[i] += `• ${magItem[0].name}, LDJ pg.${magItem[0].page}`
       
              }  
              this.lootShow.magItems = magItems              
            }, 300); 
          }
        }
      });          
    }, 300); 
     

    setTimeout(() => {              
      if(this.lootShow.magItems.length == 0 && this.lootShow.gemArts == '' && this.lootShow.money == '') {
        this.lootNone = true
      } else {
        this.lootNone = false
      }
    }, 650);  
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
      magItems: []
    }
  }
  convertPiece(){    
    if(this.valorToConvert == undefined || this.selectedOption == "Escolha uma Moeda" ){
      //console.log("errou")
    }     
    switch(this.selectedOption){
      case "Cobre":
        ELEMENT_DATA[0].cobre = this.valorToConvert
        ELEMENT_DATA[0].prata = (this.valorToConvert / 10)
        ELEMENT_DATA[0].electrum = (this.valorToConvert / 50)
        ELEMENT_DATA[0].ouro = (this.valorToConvert / 100)
        ELEMENT_DATA[0].platina = (this.valorToConvert / 1000)
        break;
      case "Prata":
        ELEMENT_DATA[0].cobre = this.valorToConvert * 10
        ELEMENT_DATA[0].prata = this.valorToConvert 
        ELEMENT_DATA[0].electrum = (this.valorToConvert / 5)
        ELEMENT_DATA[0].ouro = (this.valorToConvert / 10)
        ELEMENT_DATA[0].platina = (this.valorToConvert /100 )
        break;
      case "Electrum":
        ELEMENT_DATA[0].cobre = this.valorToConvert * 50
        ELEMENT_DATA[0].prata = this.valorToConvert * 5
        ELEMENT_DATA[0].electrum = this.valorToConvert
        ELEMENT_DATA[0].ouro = (this.valorToConvert / 2)
        ELEMENT_DATA[0].platina = (this.valorToConvert /20)
        break;
      case "Ouro":
        ELEMENT_DATA[0].cobre = this.valorToConvert * 100
        ELEMENT_DATA[0].prata = this.valorToConvert * 10
        ELEMENT_DATA[0].electrum = this.valorToConvert * 2
        ELEMENT_DATA[0].ouro = this.valorToConvert
        ELEMENT_DATA[0].platina = (this.valorToConvert /10)
        break;
      case "Platina":
        ELEMENT_DATA[0].cobre = this.valorToConvert * 1000
        ELEMENT_DATA[0].prata = this.valorToConvert * 100
        ELEMENT_DATA[0].electrum = this.valorToConvert * 20
        ELEMENT_DATA[0].ouro = this.valorToConvert * 10
        ELEMENT_DATA[0].platina = this.valorToConvert
        break;
    }
  }

  rollDice(max, min = 1) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
