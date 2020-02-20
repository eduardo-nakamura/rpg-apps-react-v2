import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-game-hook',
  templateUrl: './game-hook.component.html',
  styleUrls: ['./game-hook.component.css']
})
export class GameHookComponent implements OnInit {
  gameHook: string

  constructor(private apiService: ApiService) { }

  ngOnInit() {
   this.randomGH()   
  }

  randomGH(){
    this.apiService.getGameHooks().subscribe((data) => {       
      let gameHooksList = JSON.parse(JSON.stringify(data))
      let random = Math.floor((Math.random() * gameHooksList.length) + 1)
      return this.gameHook = gameHooksList[random]       
   });   
  }

 

}
