import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameHookComponent } from './game-hook.component';

const routes: Routes = [{ path: '', component: GameHookComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameHookRoutingModule { }
