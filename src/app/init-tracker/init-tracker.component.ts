import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


import { MatTableDataSource } from '@angular/material/table';


import { FAHEN,NYARIS,NEW } from './initiativeGroups';


export interface initTable {
  name: string;
  bonusInit: number;
  diceInit: number;
  totalInit: number;
}
export class initChar {
  name: string;
  bonusInit: number;
  diceInit: number;
  totalInit: number;
}

const ELEMENT_DATA: initTable[] = [
  // { name: "Nibi", bonusInit: 5, diceInit: 0, totalInit: 0, }
]

@Component({
  selector: 'app-init-tracker',
  templateUrl: './init-tracker.component.html',
  styleUrls: ['./init-tracker.component.css']
})
export class InitTrackerComponent implements OnInit {
  public selectOptions = ['Fahen','Lytix','Novo'];
  displayedColumns: string[] = ['name', 'bonusInit', 'diceInit', 'totalInit', 'delete'];
  dataSource = ELEMENT_DATA;
  selectedOption
  addNewChar
  constructor(private apiService: ApiService) { }


  ngOnInit() {
    
  }
  selectChangeHandler() {    

    if(this.selectedOption == "Fahen"){
       this.apiService.getNews().subscribe((data:initTable[])=>{    
          this.dataSource = data;
        });
    } else if (this.selectedOption == "Lytix"){
      this.apiService.getNewss().subscribe((data:initTable[])=>{    
        this.dataSource = data;
      });
    } else {
      let group: initTable[] = []
      this.dataSource = group
    }
    

  }
 
  atualizarTabela() {        
  
  }


   ordenarTabela() {
    
  }
  removeChar(i) {

  }
  rollDice(i){    

  }
  addChar() {    
  
  }
  start(){   

  }
  next(){

  }
  prev(){

    
  }
  finish(){      

  }
}




