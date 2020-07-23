import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';

import { DiceRollerRoutingModule } from './dice-roller-routing.module';
import { DiceRollerComponent } from './dice-roller.component';


@NgModule({
  declarations: [DiceRollerComponent],
  imports: [
    CommonModule,
    DiceRollerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatTableModule
  ]
})
export class DiceRollerModule { }
