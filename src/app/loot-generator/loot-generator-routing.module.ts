import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LootGeneratorComponent } from './loot-generator.component';

const routes: Routes = [{ path: '', component: LootGeneratorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LootGeneratorRoutingModule { }
