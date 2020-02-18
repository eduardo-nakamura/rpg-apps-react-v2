import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{ path: 'dice-roller', loadChildren: () => import('./dice-roller/dice-roller.module').then(m => m.DiceRollerModule) }, { path: 'init-tracker', loadChildren: () => import('./init-tracker/init-tracker.module').then(m => m.InitTrackerModule) }, { path: 'game-hook', loadChildren: () => import('./game-hook/game-hook.module').then(m => m.GameHookModule) }, { path: 'loot-generator', loadChildren: () => import('./loot-generator/loot-generator.module').then(m => m.LootGeneratorModule) }, { path: 'npc-generator', loadChildren: () => import('./npc-generator/npc-generator.module').then(m => m.NpcGeneratorModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
