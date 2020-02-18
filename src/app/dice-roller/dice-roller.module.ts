import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiceRollerRoutingModule } from './dice-roller-routing.module';
import { DiceRollerComponent } from './dice-roller.component';


@NgModule({
  declarations: [DiceRollerComponent],
  imports: [
    CommonModule,
    DiceRollerRoutingModule
  ]
})
export class DiceRollerModule { }
