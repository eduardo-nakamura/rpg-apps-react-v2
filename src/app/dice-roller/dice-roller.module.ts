import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { DiceRollerRoutingModule } from './dice-roller-routing.module';
import { DiceRollerComponent } from './dice-roller.component';


@NgModule({
  declarations: [DiceRollerComponent],
  imports: [
    CommonModule,
    DiceRollerRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DiceRollerModule { }
