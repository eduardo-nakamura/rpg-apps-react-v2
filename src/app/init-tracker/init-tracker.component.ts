import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-init-tracker',
  templateUrl: './init-tracker.component.html',
  styleUrls: ['./init-tracker.component.css']
})
export class InitTrackerComponent implements OnInit {
  selectedParty;
  initObj:number
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    // this.apiService.getNews().subscribe((data)=>{
    //   console.log(data);
    //   this.selectedParty = data;
    // });
  }
  selectChangeHandler(event: any) {    
    if(event.target.value == 0){
      this.apiService.getNews().subscribe((data)=>{
        console.log(data);
        this.selectedParty = data;
      });
    } else if(event.target.value == 1){
      this.apiService.getNewss().subscribe((data)=>{
        console.log(data);
        this.selectedParty = data;
      });
    }
    
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
    // this.addNewCharInput=true
    // this.atualizarTabela()
  }
}
