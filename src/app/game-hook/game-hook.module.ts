import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameHookRoutingModule } from './game-hook-routing.module';
import { GameHookComponent } from './game-hook.component';


@NgModule({
  declarations: [GameHookComponent],
  imports: [
    CommonModule,
    GameHookRoutingModule
  ]
})
export class GameHookModule { }
