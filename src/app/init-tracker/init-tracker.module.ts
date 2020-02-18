import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { InitTrackerRoutingModule } from './init-tracker-routing.module';
import { InitTrackerComponent } from './init-tracker.component';


@NgModule({
  declarations: [InitTrackerComponent],
  imports: [
    CommonModule,
    InitTrackerRoutingModule,
    HttpClientModule
  ]
})
export class InitTrackerModule { }
