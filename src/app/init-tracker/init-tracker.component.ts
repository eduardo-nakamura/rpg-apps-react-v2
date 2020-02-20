import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { MatTableDataSource } from '@angular/material/table';

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

const ELEMENT_DATA: initTable[] = []

@Component({
  selector: 'app-init-tracker',
  templateUrl: './init-tracker.component.html',
  styleUrls: ['./init-tracker.component.css']
})
export class InitTrackerComponent implements OnInit {
  @Input() childExample: string;

  public selectOptions = ['Fahen', 'Lytix', 'Novo'];
  langSelected:number = 1
  init: initTable[]
  selectedOption
  addNewChar
  displayedColumns: string[] = ['name', 'bonusInit', 'diceInit', 'totalInit', 'delete'];
  dataSource = new MatTableDataSource<initTable>(ELEMENT_DATA);
  turno:number = 0  
  started = false
  textHover:string
  lang = [
    
      {  
        titl: "Initiative Tracker",
        partySelect: "Choose a Party",
        nameMember: "Name",
        bonus: "Bonus Init",
        dice: "Dice Init",
        total: "Total Init",
        elim: "Remove"
      },
      {  
        titl: "Calculo de Iniciativa",
        partySelect: "Escolha um Grupo",
        nameMember: "Nome",
        bonus: "Bonus Init",
        dice: "Dados Init",
        total: "Total Init",
        elim: "Eliminar"
      }
  ]

  btnInit =[
    // {functionBtn: 'start', classFa: 'fa-play', btnName: 'Iniciar Encontro'},
    {functionBtn: 'prev', classFa: 'fa-angle-left', btnName: 'Anterior'},
    {functionBtn: 'sortTable', classFa: 'fa-sync-alt', btnName: 'Ordenar Tabela'},
    {functionBtn: 'next', classFa: 'fa-angle-right', btnName: 'Próximo'},
    {functionBtn: 'finish', classFa: 'fa-flag', btnName: 'Encerrar Encontro'}
  ]
  constructor(private apiService: ApiService) { }


  ngOnInit() {    
    this.init = []
    switch(localStorage.getItem('languageSet')){
      case 'English':this.langSelected = 0;break;
      case 'Português':this.langSelected = 1;break;
    }
    // if(sessionStorage.getItem('languageSet') == "English")
  }

  selectChangeHandlers(event: any) {
    if (this.selectedOption == "Fahen") {
      this.apiService.getFahen().subscribe((data: initTable[]) => {       
        this.init = data
        this.atualizarTabela()
      });
    }
    else if (this.selectedOption == "Lytix") {
      this.apiService.getLytix().subscribe((data: initTable[]) => {       
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
    if(this.init[0].name == ''){
      this.init.splice(0, 1)
    }    
    for (let i = 0; i < this.init.length; i++) {
      this.init[i].totalInit = this.init[i].bonusInit + this.init[i].diceInit
    }    
    this.dataSource = new MatTableDataSource<initTable>(this.init);
  }

  sortTable() {
    this.init.sort(function (a, b) {
      if (a.totalInit > b.totalInit) {
        return -1;
      }
      if (a.totalInit < b.totalInit) {
        return 1;
      }
      return 0;
    });    
    this.atualizarTabela()
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
    this.sortTable()
    this.started = true       
    this.turno = 0
    this.displayedColumns = ['name',  'totalInit', 'delete'];
  }
  next() {
    if(this.turno < this.init.length-1){
      this.turno = this.turno+1
    } else{
      this.turno = 0
    }        
    this.sortTable()
  }
  prev() {
    if(this.turno < 1){
      this.turno = this.init.length-1
    } else{
      this.turno = this.turno-1
    }

  }
  btnFunction(e){
    switch(e){
      case 'start':this.start();break;
      case 'prev':this.prev();break;
      case 'sortTable':this.sortTable();break;
      case 'next':this.next();break;
      case 'finish':this.finish();break;
    }
  }
  finish() {
    this.selectedOption = undefined
    this.init = undefined   
    this.dataSource = new MatTableDataSource<initTable>(ELEMENT_DATA);
    this.started = false
    this.displayedColumns = ['name', 'bonusInit', 'diceInit', 'totalInit', 'delete'];
  }
}