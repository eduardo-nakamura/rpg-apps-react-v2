import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NpcGeneratorComponent } from './npc-generator.component';

const routes: Routes = [{ path: '', component: NpcGeneratorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NpcGeneratorRoutingModule { }
