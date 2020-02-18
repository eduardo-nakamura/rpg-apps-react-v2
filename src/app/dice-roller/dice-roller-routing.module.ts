import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiceRollerComponent } from './dice-roller.component';

const routes: Routes = [{ path: '', component: DiceRollerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiceRollerRoutingModule { }
