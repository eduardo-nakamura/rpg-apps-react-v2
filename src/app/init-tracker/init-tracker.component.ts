import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


import { MatTableDataSource } from '@angular/material/table';


import { FAHEN, NYARIS, NEW } from './initiativeGroups';


export interface initTable {
  name: string;
  bonusInit: number;
  diceInit: number;
  totalInit: number;
}
export class initChar {
  name: string;
  bonusInit: number = 0;
  diceInit: number = 0;
  totalInit: number = 0;
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
  public selectOptions = ['Fahen', 'Lytix', 'Novo'];
  init: initTable[]
  selectedOption
  addNewChar
  displayedColumns: string[] = ['name', 'bonusInit', 'diceInit', 'totalInit', 'delete'];
  dataSource = new MatTableDataSource<initTable>(ELEMENT_DATA);
  constructor(private apiService: ApiService) { }


  ngOnInit() {
    this.init = []
  }

  selectChangeHandlers(event: any) {
    if (this.selectedOption == "Fahen") {
      this.apiService.getFahen().subscribe((data: initTable[]) => {
        console.log(data)
        this.init = data
        this.atualizarTabela()
      });
    }
    else if (this.selectedOption == "Lytix") {
      this.apiService.getLytix().subscribe((data: initTable[]) => {
        console.log(data)
        this.init = data
        this.atualizarTabela()
      });
    }
    else {
      this.init = []
      this.atualizarTabela()
    }
    
  }
 

  atualizarTabela() {
    // if(this.init[0].name == ''){
    //   this.init.splice(0, 1)
    // }    
    // for (let i = 0; i < this.init.length; i++) {
    //   this.init[i].totalInit = this.init[i].bonusInit + this.init[i].diceInit
    // }    
    this.dataSource = new MatTableDataSource<initTable>(this.init);
  }


  ordenarTabela() {

  }
  removeChar(i) {
    this.init.splice(i, 1)    
    this.atualizarTabela()
  }
  rollDice(i) {
    this.init[i].diceInit = Math.floor((Math.random() * 20) + 1)
    this.atualizarTabela()   
  }
  addChar() {
    if (this.addNewChar != '') {
      let newChar = new initChar();
      newChar.name = this.addNewChar;
      this.init.push(newChar)
      this.addNewChar = ''
    }
    this.atualizarTabela()
  }
  start() {

  }
  next() {

  }
  prev() {


  }
  finish() {

  }
}




