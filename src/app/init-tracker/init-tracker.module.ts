import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InitTrackerRoutingModule } from './init-tracker-routing.module';
import { InitTrackerComponent } from './init-tracker.component';


@NgModule({
  declarations: [InitTrackerComponent],
  imports: [
    CommonModule,
    InitTrackerRoutingModule
  ]
})
export class InitTrackerModule { }
