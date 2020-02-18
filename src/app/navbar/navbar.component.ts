import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  menuContent = [
    {router: 'dice-roller', title: 'Dice Roller',class:'fa-dice'},
    {router: 'init-tracker', title: 'Initiative Tracker',class:'fa-hourglass-half'},
    {router: 'game-hook', title: 'Game Hook',class:'fa-comments'},
    {router: 'loot-generator', title: 'Loot Generator',class:'fa-coins'},
    {router: 'npc-generator', title: 'NPC Generator',class:'fa-users'},
    {router: 'intro', title: 'Intro',class:'fa-rocket'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
