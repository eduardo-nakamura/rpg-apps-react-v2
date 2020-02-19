import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

export class formChar {
  name: string;
  bonusInit: number = 0;
  diceInit: number = 0;
  totalInit: number = 0
}
@Component({
  selector: 'app-init-tracker',
  templateUrl: './init-tracker.component.html',
  styleUrls: ['./init-tracker.component.css']
})
export class InitTrackerComponent implements OnInit {
  selectedParty;
  initObj:number
  addNewCharInput = false
  addNewChar = ''
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    // this.apiService.getNews().subscribe((data)=>{
    //   console.log(data);
    //   this.selectedParty = data;
    // });
  }
  addChar() {    
    if(this.addNewChar != ''){
      let teste = new formChar();
      teste.name = this.addNewChar;
      this.selectedParty.push(teste)
      console.log('teste',teste,this.selectedParty)
      this.addNewChar = ''
    }
  }
  selectChangeHandler(event: any) {    
    if(event.target.value == 0){
      this.apiService.getNews().subscribe((data)=>{        
        this.selectedParty = data;
      });
    } else if(event.target.value == 1){
      this.apiService.getNewss().subscribe((data)=>{        
        this.selectedParty = data;
      });
    }
    this.addNewCharInput = true
    this.atualizarTabela()
    // let teste = event.target.value;
    // console.log(event.target.value)
    // if(event.target.value == 0){
    //   this.apiService.partyFahen().subscribe((data)=>{   
    //     console.log(data)     
    //     this.selectedParty = data;
    //   });
    // } else if (event.target.value == 1){
    //   this.apiService.partyLytix().subscribe((data)=>{        
    //     this.selectedParty = data;
    //   });
    // }
    // console.log(this.selectedParty)
    // this.atualizarTabela()
  }
  atualizarTabela() {    
    
    // if(this.initObj[0].name == ''){
    //   this.initObj.splice(0, 1)
    // }    
    // for (let i = 0; i < this.initObj.length; i++) {
    //   this.initObj[i].totalInit = this.initObj[i].bonusInit + this.initObj[i].diceInit
    // }    
  }
}
