import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cards = [
    {
     
      imagem: './assets/dice.jpg',
      titulo: 'Dice Roller',
      descricao: 'Aplicativo para Rolar Dados',
      path: 'dice-roller'
    },
    {
      
      imagem: './assets/turn.jpg',
      titulo: 'Initiative Tracker',
      descricao: 'Aplicativo para determinar iniciativa',
      path: 'init-tracker'
    },
    {
      imagem: './assets/hook.jpg',
      titulo: 'Game Hooks',
      descricao: 'Alguns ganchos de história para iniciar uma aventura',
      path: 'game-hook'
    },
    {
      imagem: './assets/loot.jpg',
      titulo: 'Loot Generator',
      descricao: 'Determine os tesouros do seus jogadores aqui',
      path: 'loot-generator'
    },
    {
      imagem: './assets/npc.jpg',
      titulo: 'NPC Generator',
      descricao: 'Gere personagens para sua campanha',
      path: 'npc-generator'
    },
  ]
  constructor() { }

  ngOnInit(): void {
    
  }

  teste(){
    console.log(window.location.host,"4")
  }

}
