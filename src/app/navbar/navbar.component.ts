import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  parentExample: string = "teste"
  menuContent = [
    {router: 'dice-roller', title: 'Dice Roller',class:'fa-dice'},
    {router: 'init-tracker', title: 'Initiative Tracker',class:'fa-hourglass-half'},
    {router: 'game-hook', title: 'Game Hook',class:'fa-comments'},
    {router: 'loot-generator', title: 'Loot Generator',class:'fa-coins'},
    {router: 'npc-generator', title: 'NPC Generator',class:'fa-users'}
  ]
  languages = [
    "English","Português"
  ]
  public selectedLanguage:string
  constructor() { }

  ngOnInit(): void {
    localStorage.setItem('languageSet',this.languages[0]);
  }
  selLanguage(event: any){    
    localStorage.setItem('languageSet',event.target.value);
  }
}
