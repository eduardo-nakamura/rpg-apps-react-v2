import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InitTrackerComponent } from './init-tracker.component';

const routes: Routes = [{ path: '', component: InitTrackerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InitTrackerRoutingModule { }
